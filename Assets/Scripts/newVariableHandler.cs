using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.SceneManagement;

public class newVariableHandler : MonoBehaviour
{
    public static float playerEnergy = 300f;
    public static float playerHealth = 400f;
    public static float enemyEnergy = 300f;
    public static float enemyHealth = 400f;

    public static float playerHitChance = 85f;
    public static float enemyHitChance = 95f;

    public static float maxValue = 400f;

    private Text hitChanceText;
    private Text turnText;

    private Image playerEnergyBar;
    private Image playerHealthBar;

    private Image enemyHealthBar;
    private Image enemyEnergyBar;

    private Text playerHealthText;
    private Text playerEnergyText;

    private Text stateText;
    private Text resetSSRIText;
    public enum turnManager { playerTurn, afterPlayerTurn, enemyTurn, afterEnemyTurn, none, empty }
    public turnManager currentTurn = turnManager.playerTurn;

    public bool buttonsEnabled = true;




    public static int SSRICounter = 1;


    bool buttonsActivated = false;

    public static bool extraTurn = false;

    public static int turns = 0;

    public static int SSRIUsed = 0;

    bool fadeInBool = false;

    public static int methylUsage = 0;
    public static int clobUsage = 0;
    public static int ssriUsage = 0;
    public static int betaUsage = 0;

    public static bool methylResistant = false;
    public static bool clobResistant = false;
    public static bool betaResistant = false;

    // Start is called before the first frame update
    void Start()
    {
        currentTurn = turnManager.playerTurn;
        
       
        
        hitChanceText = GameObject.FindGameObjectWithTag("hitChanceText").GetComponent<Text>();
        turnText = GameObject.FindGameObjectWithTag("turnText").GetComponent<Text>();
        playerEnergyBar = GameObject.FindGameObjectWithTag("pFillEnergy").GetComponent<Image>();
        playerHealthBar = GameObject.FindGameObjectWithTag("pFillHealth").GetComponent<Image>();
        enemyEnergyBar = GameObject.FindGameObjectWithTag("eFillEnergy").GetComponent<Image>();
        enemyHealthBar = GameObject.FindGameObjectWithTag("eFillHealth").GetComponent<Image>();
        playerHealthText = GameObject.FindGameObjectWithTag("healthValueText").GetComponent<Text>();
        playerEnergyText = GameObject.FindGameObjectWithTag("energyValueText").GetComponent<Text>();

        stateText = GameObject.FindGameObjectWithTag("stateText").GetComponent<Text>();
        resetSSRIText = GameObject.FindGameObjectWithTag("ssriReset").GetComponent<Text>();

    }

    // Update is called once per frame
    void FixedUpdate()
    {

       // Debug.Log("Turns: " + turns);
       // Debug.Log("SSRI Used: " + SSRIUsed);



        //If SSRI not used once over 4 turns get reset to zero
        if (turns > 4)
        {
            if(SSRIUsed == 0)
            {
                SSRICounter = 1;
                //StartCoroutine(fadeIn(1f,resetSSRIText));
                turns = 0;
                SSRIUsed = 0;
                StartCoroutine(fadeOut(30f, resetSSRIText));
            }
            else
            {
                turns = 0;
                SSRIUsed = 0;
            }
        }
       
        if(playerHitChance > 100f)
        {
            playerHitChance = 100f;
        }

        playerEnergyBar.fillAmount = (playerEnergy / maxValue);
        updateColour(playerEnergy / maxValue, playerEnergyBar, 1);
        playerHealthBar.fillAmount = (playerHealth / maxValue);
        updateColour(playerHealth / maxValue, playerHealthBar, 0);
        enemyHealthBar.fillAmount = (enemyHealth / maxValue);
        updateColour(enemyHealth / maxValue, enemyHealthBar, 0);
        enemyEnergyBar.fillAmount = (enemyEnergy / maxValue);
        updateColour(enemyEnergy / maxValue, enemyEnergyBar, 1);




        playerEnergy = valueLimits(playerEnergy);
        playerHealth = valueLimits(playerHealth);
        enemyHealth = valueLimits(enemyHealth);
        enemyEnergy = valueLimits(enemyEnergy);

        hitChanceText.text = "Hit Chance: " + playerHitChance.ToString("F2") + "%";
        playerHealthText.text = playerHealth.ToString("F1");
        playerEnergyText.text = playerEnergy.ToString("F1");

       if(playerHealth <= 0)
        {
            Debug.Log("Player has lost all health");
            currentTurn = turnManager.none;
            //StopAllCoroutines();
            GetComponent<selectButtons>().deactivateButtons();
            StartCoroutine(endGame("Player Lose Scene"));


        }
        if (enemyHealth <= 0)
        {
            Debug.Log("Enemy has lost all health");
            currentTurn = turnManager.none;
            //StopAllCoroutines();
            GetComponent<selectButtons>().deactivateButtons();
            StartCoroutine(endGame("Player Win Scene"));


        }

        if (currentTurn == turnManager.playerTurn)
        {
            if (!buttonsEnabled)
            {
                StartCoroutine(waitSecondsEnable(3f));
                buttonsEnabled = true;

            }
        }
        else
        {
            GetComponent<selectButtons>().disableButtons();
            buttonsEnabled = false;
        }


        switch (currentTurn)
        {
            case (turnManager.playerTurn):
                turnText.text = "TURN: PLAYER";
                turnText.color = Color.white;
                stateText.text = "Current state: Player Turn";
                break;
            case (turnManager.enemyTurn):
                turnText.text = "TURN: ENEMY";
                this.GetComponent<selectButtons>().happeningText.text = "The enemy is getting ready to strike...";
                turnText.color = Color.red;
                stateText.text = "Current state: Enemy Turn";
                break;
            case (turnManager.afterPlayerTurn):
                turnText.text = "TURN: ...";
                turnText.color = Color.red;
                stateText.text = "Current state: After the Player's Turn";
                break;
            case (turnManager.afterEnemyTurn):
                turnText.text = "THE ENEMY HAS ATTACKED";
                stateText.text = "Current state: After the enemy turn";
                this.GetComponent<selectButtons>().happeningText.text = enemyAttackFunctions.attackString;
                turnText.color = Color.red;
                break;
        }

           switch (currentTurn)
           {
               case turnManager.afterPlayerTurn:
                //Debug.Log("after player turn manager state");
                buttonsActivated = false;
                StartCoroutine(afterPlayerTurn());

                   break;
               case turnManager.enemyTurn:
                //Debug.Log("enemy turn manager state");
                StartCoroutine(enemyTurn());

                   break;
               case turnManager.afterEnemyTurn:
                
               // Debug.Log("after enemy turn manager state");
                StartCoroutine(afterEnemyTurn());
                   break;

               case turnManager.playerTurn:
                enemyAttackFunctions.enemyAttacked = false;
               // Debug.Log("player turn manager state");
                

                if (!buttonsActivated)
                {
                    this.GetComponent<selectButtons>().activateButtons();

                    this.GetComponent<selectButtons>().happeningText.text = "It's your turn! Select an attack!";
                    buttonsActivated = true;
                    if (methylResistant)
                    {
                        GetComponent<selectButtons>().methylButton.gameObject.SetActive(false);
                        methylResistant = false;
                    }
                    if (clobResistant)
                    {
                        GetComponent<selectButtons>().clobButton.gameObject.SetActive(false);
                        clobResistant = false;
                    }
                    if (betaResistant)
                    {
                        GetComponent<selectButtons>().betaButton.gameObject.SetActive(false);
                        betaResistant = false;
                    }
                }
                break;

            case turnManager.empty:
                stateText.text = "Current state: Empty state";
                StartCoroutine(wait());
                //currentTurn = turnManager.playerTurn;
                break;
            default:

                   break;
           }
        

        if (Input.GetKeyDown(KeyCode.Return))
        {
            if (currentTurn == turnManager.playerTurn)
            {
                this.GetComponent<attackScript>().attack();
                this.GetComponent<selectButtons>().resetSelectedAndInitiateAttack();
            }
        }
    }

    public void updateColour(float value, Image bar, int type)
    {
        if (value < 0.5f)
        {
            bar.color = Color.red;
        }
        else
        {
            switch (type)
            {
                case 0:
                    bar.color = Color.green;
                    break;
                case 1:
                    bar.color = Color.blue;
                    break;
            }
        }
    }




    public float valueLimits(float value)
    {
        if (value > maxValue)
        {
            return maxValue;
        }
        else if (value < 0f)
        {
            return 0f;
        }
        else
        {
            return value;
        }

    }


    IEnumerator afterPlayerTurn()
    {
        //Debug.Log("after player turn coroutine");
        yield return new WaitForSeconds(3f);
        if (extraTurn)
        {
            playerExtraTurn();
           // Debug.Log("got extra turn");
        }
        else
        {
            doAfterPlayerTurn();
           // Debug.Log("going to after player turn");
        }
        

    }

    IEnumerator enemyTurn()
    {
        //Debug.Log("enemy turn coroutine");
        yield return new WaitForSeconds(3f);
        doEnemyTurn();
    }

    IEnumerator afterEnemyTurn()
    {
       // Debug.Log("after enemy turn coroutine");
        yield return new WaitForSeconds(3f);
        doAfterEnemyTurn();
        yield break;
       

    }

    IEnumerator wait()
    {
        yield return new WaitForSeconds(4f);
        currentTurn = turnManager.playerTurn;
    }

    public void doAfterPlayerTurn()
    {
        //Debug.Log("After player turn function");

            currentTurn = turnManager.enemyTurn;
        
       
    }
    public void playerExtraTurn()
    {
        currentTurn = turnManager.playerTurn;
    }

    public void doEnemyTurn()
    {
        //Debug.Log("Enemy turn function");
        currentTurn = turnManager.afterEnemyTurn;

    }
    public void doAfterEnemyTurn()
    {

        //Debug.Log("After enemy turn function");   
        currentTurn = turnManager.empty;
       

    }

    public IEnumerator fadeIn(float timeDiv, Text text)
    {
        text.color = new Color(text.color.r, text.color.g, text.color.b, 0);
        while(text.color.a < 1.0f)
        {
            text.color = new Color(text.color.r, text.color.g, text.color.b, text.color.a + (Time.fixedDeltaTime / timeDiv));
            yield return null;
        }

    }

    public IEnumerator fadeOut(float timeDiv, Text text)
    {
        text.color = new Color(text.color.r, text.color.g, text.color.b, 1.0f);
        yield return new WaitForSeconds(3f);
        while (text.color.a > 0.0f)
        {
            text.color = new Color(text.color.r, text.color.g, text.color.b, text.color.a - (Time.fixedDeltaTime / timeDiv));
            yield return null;
        }

    }

    public IEnumerator waitSecondsEnable(float time)
    {
        yield return new WaitForSeconds(time);
        GetComponent<selectButtons>().enableButtons();
    }

    public IEnumerator endGame(string scene)
    {
        yield return new WaitForSeconds(2f);
        SceneManager.LoadScene(scene);

    }
}

