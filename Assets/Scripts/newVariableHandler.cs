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

     Text hitChanceText;
     Text turnText;

     Image playerEnergyBar;
     Image playerHealthBar;

     Image enemyHealthBar;
     Image enemyEnergyBar;

     Text playerHealthText;
     Text playerEnergyText;

    public enum turnManager { playerTurn, afterPlayerTurn, enemyTurn, afterEnemyTurn, none, empty }
    public turnManager currentTurn = turnManager.playerTurn;

    public float counter = 100f;
    public float rawCounter = 0f;
    public float newCounter = 0f;


    public static int SSRICounter = 1;

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
                turnText.color = Color.red;
                break;
            case (turnManager.afterPlayerTurn):
                turnText.text = "TURN: ...";
                turnText.color = Color.red;
                break;
            case (turnManager.afterEnemyTurn):
                turnText.text = "TURN: ...";
                turnText.color = Color.white;
                break;
        }

        //if(currentTurn == turnManager.afterPlayerTurn) 
        //{
        //    rawCounter = 0f;
        //    counter = 100f;
        //    bool inLoop = true;
        //    bool inLoop2 = false;
        //    bool inLoop3 = false;
        //    while (inLoop)
        //    {
        //        rawCounter += Time.fixedDeltaTime;
        //        Debug.Log("Raw counter in first loop: " + rawCounter);
        //        if(rawCounter > counter)
        //        {
        //            this.GetComponent<selectButtons>().happeningText.text = "The enemy is getting ready to strike...";
        //            inLoop = false;
        //            inLoop2 = true;
        //            rawCounter = 0f;
        //            while (inLoop2)
        //            {
        //                rawCounter += Time.fixedDeltaTime;

        //                if (rawCounter > counter)
        //                {
        //                    this.GetComponent<selectButtons>().happeningText.text = "The enemy attacks!";
        //                    inLoop2 = false;
        //                    inLoop3 = true;
        //                    rawCounter = 0f;
        //                    rawCounter = 0f;
        //                    while (inLoop3)
        //                    {
        //                        rawCounter += Time.fixedDeltaTime;

        //                        if (rawCounter > counter)
        //                        {
        //                            this.GetComponent<selectButtons>().happeningText.text = "It's your turn! Pick an attack!";
        //                            this.GetComponent<selectButtons>().activateButtons();
        //                            inLoop3 = false;
        //                            rawCounter = 0f;
        //                            break;

        //                        }

        //                    }
        //                    currentTurn = turnManager.playerTurn;
        //                    break;

        //                }


        //            }
        //            break;

        //        }
        //    }
           
           
           
            

        //}

        

        switch (currentTurn)
        {
            case turnManager.afterPlayerTurn:
                Debug.Log("after player turn");
                counter = 500f;
                while (currentTurn == turnManager.afterPlayerTurn)
                {
                    rawCounter += Time.fixedDeltaTime;
                    Debug.Log("After player turn rawTimer counting: " + rawCounter);
                    if (rawCounter >= counter)
                    {
                        Debug.Log("after player turn");
                        this.GetComponent<selectButtons>().happeningText.text = "The enemy is getting ready to strike...";
                        currentTurn = turnManager.enemyTurn;
                        rawCounter = 0f;
                        break;
                    }

                }
                break;
            case turnManager.enemyTurn:
                Debug.Log("enemy turn");
                rawCounter = 0f;
                counter = rawCounter + 500f;
                while (currentTurn == turnManager.enemyTurn)
                {
                    rawCounter += Time.fixedDeltaTime;
                    Debug.Log("Enemy turn rawTimer counting: " + rawCounter);
                    if (rawCounter >= counter)
                    {
                        Debug.Log("enemy turn");
                        Debug.Log("Raw counter enemy turn = " + rawCounter);
                        this.GetComponent<selectButtons>().happeningText.text = "The enemy attacks!";
                        currentTurn = turnManager.afterEnemyTurn;
                        rawCounter = 0f;
                        break;
                    }

                }
                break;
            case turnManager.afterEnemyTurn:
                Debug.Log("after enemy turn");
                counter = rawCounter + 500f;
                while (currentTurn == turnManager.afterEnemyTurn)
                {
                    rawCounter += Time.fixedDeltaTime;
                    Debug.Log("After enemy turn rawTimer counting: " + rawCounter);
                    if (rawCounter >= counter)
                    {
                        Debug.Log("after enemy turn");
                        Debug.Log("Raw counter after enemy turn = " + rawCounter);
                        this.GetComponent<selectButtons>().happeningText.text = "It's your turn... select an attack!";
                        this.GetComponent<selectButtons>().activateButtons();
                        currentTurn = turnManager.playerTurn;
                        rawCounter = 0f;
                        break;
                    }

                }

                break;

            case turnManager.playerTurn:
                Debug.Log("It's the player's turn!");
                break;
            default:
                //Nothing will happen
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

    public void toPlayerTurn()
    {
        Debug.Log("In to player turn");
        this.GetComponent<selectButtons>().activateButtons();
        currentTurn = turnManager.playerTurn;

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

}
