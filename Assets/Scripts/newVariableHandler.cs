using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class newVariableHandler : MonoBehaviour
{
    public static float playerEnergy = 200f;
    public static float playerHealth = 400f;
    public static float enemyEnergy = 200f;
    public static float enemyHealth = 400f;

    public static float playerHitChance = 90f;
    public static float enemyHitChance = 85f;

    public float maxValue = 400f;

     public Text hitChanceText;
     public Text turnText;

     public Image playerEnergyBar;
     public Image playerHealthBar;

     public Image enemyHealthBar;
     public Image enemyEnergyBar;

     public Text playerHealthText;
     public Text playerEnergyText;

    public enum turnManager { playerTurn, afterPlayerTurn, enemyTurn, afterEnemyTurn, none, empty }
    public turnManager currentTurn = turnManager.playerTurn;

    public float counter = 100f;
    public float rawCounter = 0f;
    public float newCounter = 0f;


    public static int SSRICounter = 1;

    public float timer = 0f;

    bool buttonsActivated = false;

    public static bool extraTurn = false;

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

    }

    // Update is called once per frame
    void FixedUpdate()
    {
       

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


        switch (currentTurn)
        {
            case (turnManager.playerTurn):
                turnText.text = "TURN: PLAYER";
                turnText.color = Color.white;
                break;
            case (turnManager.enemyTurn):
                turnText.text = "TURN: ENEMY";
                this.GetComponent<selectButtons>().happeningText.text = "The enemy is getting ready to strike...";
                turnText.color = Color.red;
                break;
            case (turnManager.afterPlayerTurn):
                turnText.text = "TURN: ...";
                turnText.color = Color.red;
                break;
            case (turnManager.afterEnemyTurn):
                turnText.text = "THE ENEMY HAS ATTACKED";
                this.GetComponent<selectButtons>().happeningText.text = "The enemy attacks!";
                turnText.color = Color.red;
                break;
        }

           switch (currentTurn)
           {
               case turnManager.afterPlayerTurn:
                Debug.Log("after player turn manager state");
                buttonsActivated = false;
                StartCoroutine(afterPlayerTurn());

                   break;
               case turnManager.enemyTurn:
                Debug.Log("enemy turn manager state");
                StartCoroutine(enemyTurn());

                   break;
               case turnManager.afterEnemyTurn:
                Debug.Log("after enemy turn manager state");
                StartCoroutine(afterEnemyTurn());
                   break;

               case turnManager.playerTurn:
                   Debug.Log("player turn manager state");
                

                if (!buttonsActivated)
                {
                    this.GetComponent<selectButtons>().activateButtons();

                    this.GetComponent<selectButtons>().happeningText.text = "It's your turn! Select an attack!";
                    buttonsActivated = true;
                }
                break;

            case turnManager.empty:
                Debug.Log("in empty turn manager state");
                currentTurn = turnManager.playerTurn;
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
        Debug.Log("after player turn coroutine");
        yield return new WaitForSeconds(3f);
        if (extraTurn)
        {
            playerExtraTurn();
        }
        else
        {
            doAfterPlayerTurn();
        }
        

    }

    IEnumerator enemyTurn()
    {
        Debug.Log("enemy turn coroutine");
        yield return new WaitForSeconds(3f);
        doEnemyTurn();
    }

    IEnumerator afterEnemyTurn()
    {
        Debug.Log("after enemy turn coroutine");
        yield return new WaitForSeconds(3f);
        doAfterEnemyTurn();
        yield break;
       

    }

    public void doAfterPlayerTurn()
    {
        Debug.Log("After player turn function");

            currentTurn = turnManager.enemyTurn;
        
       
    }
    public void playerExtraTurn()
    {
        currentTurn = turnManager.playerTurn;
    }

    public void doEnemyTurn()
    {
        Debug.Log("Enemy turn function");
        currentTurn = turnManager.afterEnemyTurn;

    }
    public void doAfterEnemyTurn()
    {

        Debug.Log("After enemy turn function");   
        currentTurn = turnManager.empty;
       

    }
}
