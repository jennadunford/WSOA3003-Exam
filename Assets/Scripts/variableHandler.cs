using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class variableHandler : MonoBehaviour
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

    public enum turnManager { playerTurn,afterPlayerTurn,enemyTurn,afterEnemyTurn}
    public turnManager currentTurn = turnManager.playerTurn;


    // Start is called before the first frame update
    void Start()
    {
        currentTurn = turnManager.playerTurn;

    }

    // Update is called once per frame
    void Update()
    {
        playerEnergyBar.fillAmount =(playerEnergy/maxValue);
        updateColour(playerEnergy / maxValue, playerEnergyBar, 1);
        playerHealthBar.fillAmount = (playerHealth/maxValue);
        updateColour(playerHealth / maxValue, playerHealthBar, 0);
        enemyHealthBar.fillAmount = (enemyHealth/maxValue);
        updateColour(enemyHealth / maxValue, enemyHealthBar, 0);
        enemyEnergyBar.fillAmount = (enemyEnergy/maxValue);
        updateColour(enemyEnergy / maxValue, enemyEnergyBar, 1);


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

        switch (currentTurn)
        {
            case variableHandler.turnManager.afterPlayerTurn:
                StartCoroutine(afterPlayerTurn());
                //Wait a second or two
                //Tell player enemy is ready to strike
                break;
            case variableHandler.turnManager.enemyTurn:
                StartCoroutine(enemyTurn());
                //Wait a second or two
                //The enemy strikes
                //Tells player what the enemy did
                break;
            case variableHandler.turnManager.afterEnemyTurn:
                StartCoroutine(afterEnemyTurn());

                //Wait a second or two
                //Inform player that its now their turn
                //Wait a second or two, switch to playerTurn
                break;

            case variableHandler.turnManager.playerTurn:
                this.GetComponent<attackScript>().attackButton.gameObject.SetActive(true);
                this.GetComponent<selectButtons>().activateButtons();
                break;
            default:
                //Nothing will happen
                break;
        }

        if (Input.GetKeyDown(KeyCode.Return))
        {
            if(currentTurn == turnManager.playerTurn)
            {
                this.GetComponent<attackScript>().attack();
                this.GetComponent<selectButtons>().resetSelectedAndInitiateAttack();
            }
        }


    }

    public void updateColour(float value, Image bar, int type)
    {
        if(value < 0.5f)
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

    IEnumerator afterPlayerTurn()
    {
        yield return new WaitForSeconds(4f);
        this.GetComponent<selectButtons>().happeningText.text = "The enemy is getting ready to strike...";
        this.GetComponent<variableHandler>().currentTurn = variableHandler.turnManager.enemyTurn;
        //yield return new WaitForSeconds(2f);

    }

    IEnumerator enemyTurn()
    {
        yield return new WaitForSeconds(4f);
        this.GetComponent<selectButtons>().happeningText.text = "The enemy attacks!";
        this.GetComponent<variableHandler>().currentTurn = variableHandler.turnManager.afterEnemyTurn;

        //yield return new WaitForSeconds(2f);
    }

    IEnumerator afterEnemyTurn()
    {
        yield return new WaitForSeconds(4f);
        this.GetComponent<selectButtons>().happeningText.text = "It's your turn... select an attack!";
        this.GetComponent<variableHandler>().currentTurn = variableHandler.turnManager.playerTurn;

        //yield return new WaitForSeconds(2f);
    }


}
