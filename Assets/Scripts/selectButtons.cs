using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class selectButtons : MonoBehaviour
{
    public Button methylButton;
    public Button clobButton;
    public Button SSRIButton;
    public Button betaButton;
    public Button attackButton;

    public GameObject InfoPanel;
   
    public static int selected = 0;

    public Text happeningText;

    public Text weaponName;
    public Text weaponDescript;
    public Text weaponStats;

    public Text selectedAttackText;

    public Text numberOfTimesUsedText;
    // Start is called before the first frame update
    private void Start()
    {
        methylButton = GameObject.FindGameObjectWithTag("mButton").GetComponent<Button>();
        clobButton = GameObject.FindGameObjectWithTag("cButton").GetComponent<Button>();
        SSRIButton = GameObject.FindGameObjectWithTag("sButton").GetComponent<Button>();
        betaButton = GameObject.FindGameObjectWithTag("bButton").GetComponent<Button>();
        attackButton = GameObject.FindGameObjectWithTag("aButton").GetComponent<Button>();

        selectedAttackText = GameObject.FindGameObjectWithTag("selectedAttackText").GetComponent<Text>();
        //numberOfTimesUsedText = GameObject.FindGameObjectWithTag("timesUsed").GetComponent<Text>();
}

    // Update is called once per frame
    private void Update()
    {
        if (Input.GetKeyDown(KeyCode.E))
        {
            displayPanel();
        }
        if(selected == 0)
        {
            selectedAttackText.text = ("Selected attack: NONE");
        }
    }
    public void selectMethyl()
    {
        selected = 1;
        selectedAttackText.text = ("Selected attack: Methylphenidate");
        // Debug.Log(selected + ": Methylphenidate is selected");


    }

    public void selectClob()
    {
        selected = 2;
        selectedAttackText.text = ("Selected attack: Clobazam");
        //Debug.Log(selected + ": Clobazam is selected");
    }

    public void selectSSRI()
    {
        selected = 3;
        selectedAttackText.text = ("Selected attack: SSRIs");
        // Debug.Log(selected + ": SSRI is selected");
    }

    public void selectBeta()
    {

        selected = 4;
        selectedAttackText.text = ("Selected attack: Beta Blockers");
       // Debug.Log(selected + ": Beta blockers is selected");
    }

    public void resetSelectedAndInitiateAttack()
    {
        if (GetComponent<newVariableHandler>().currentTurn == newVariableHandler.turnManager.playerTurn)
        {
            


           // Debug.Log(selected + ": Reset selected and attack initiated");
            switch (selected)
            {
                case 0:
                    //Debug.Log("No attack selected");
                    happeningText.text = "No attack selected";
                    selected = 0;
                    break;
                case 1:
                    deactivateButtons();
                    //Debug.Log("Attacked with methylphenidate");
                    selected = 0;
                    if (attackSucessful(newVariableHandler.playerHitChance))
                    {
                        this.GetComponent<newVariableHandler>().currentTurn = newVariableHandler.turnManager.afterPlayerTurn;
                        GetComponent<playerAttackFunctions>().methylphenidateAttack(newVariableHandler.playerEnergy);
                    }
                    else
                    {
                        GetComponent<newVariableHandler>().currentTurn = newVariableHandler.turnManager.afterPlayerTurn;
                        GetComponent<playerAttackFunctions>().missedAttack();
                    }
                   

                 
                    break;
                case 2:
                    deactivateButtons();
                    selected = 0;
                    //Debug.Log("Attacked with clobazam");
                    if (attackSucessful(newVariableHandler.playerHitChance))
                    {
                        this.GetComponent<newVariableHandler>().currentTurn = newVariableHandler.turnManager.afterPlayerTurn;
                        GetComponent<playerAttackFunctions>().clobazamAttack(newVariableHandler.playerHealth);
                    }
                    else
                    {
                        this.GetComponent<newVariableHandler>().currentTurn = newVariableHandler.turnManager.afterPlayerTurn;
                        GetComponent<playerAttackFunctions>().missedAttack();
                    }
                    
                    break;
                case 3:
                    deactivateButtons();
                    selected = 0;
                    //Debug.Log("Attacked with SSRIs");
                    if (attackSucessful(newVariableHandler.playerHitChance))
                    {
                        this.GetComponent<newVariableHandler>().currentTurn = newVariableHandler.turnManager.afterPlayerTurn;
                        GetComponent<playerAttackFunctions>().SSRIAttack(newVariableHandler.playerEnergy);
                    }
                    else
                    {
                        this.GetComponent<newVariableHandler>().currentTurn = newVariableHandler.turnManager.afterPlayerTurn;
                        GetComponent<playerAttackFunctions>().missedAttack();
                    }
                  
                    break;
                case 4:
                    deactivateButtons();
                    //Debug.Log("Attacked with Beta Blockers");
                    selected = 0;
                    if (attackSucessful(newVariableHandler.playerHitChance))
                    {
                        this.GetComponent<newVariableHandler>().currentTurn = newVariableHandler.turnManager.afterPlayerTurn;
                        GetComponent<playerAttackFunctions>().betaBlockAttack(newVariableHandler.playerEnergy);
                    }
                    else
                    {
                        this.GetComponent<newVariableHandler>().currentTurn = newVariableHandler.turnManager.afterPlayerTurn;
                        GetComponent<playerAttackFunctions>().missedAttack();
                    }


                    break;
            }

        }
        
    }

    public void closePanel()
    {
        InfoPanel.gameObject.SetActive(false);
    }

    public void displayPanel()
    {
        switch (selected)
        {
            case 0:
                break;
            case 1:
                weaponName.text = "Current Attack: METHYLPHENIDATE";
                weaponDescript.text = "Abilities: \n A powerful stimulant weapon that delivers damage to the enemy's health. The strength of methylphenidate is dependent on your energy level. The higher your energy level, the stronger the attack.";
                weaponStats.text = "Effects: \n Using this weapon will increase your energy level and your hit chance percentage. Once used more than three times, there is a chance for the enemy to become resistant to this attack for a turn, use it wisely.";
                numberOfTimesUsedText.text = "Number of times used: " + newVariableHandler.methylUsage.ToString();
                InfoPanel.gameObject.SetActive(true);
                break;
            case 2:
                weaponName.text = "Current Attack: CLOBAZAM";
                weaponDescript.text = "Abilities: \n Clobazam is a useful sedative that clears your mind and allows you to increase your own health. The lower your health is, the stronger the effect of the clobazam attack is. Due to Clobazam being a sedative, it will also decrease your hit chance percentage.";
                weaponStats.text = "Effects: \n Using clobazam will lower the enemy's attack strength. Clobazam will also grant you an extra turn, however it cannot be used twice in a row. Once used more than three times, there is a chance for the enemy to become resistant to this attack for a turn.";
                numberOfTimesUsedText.text = "Number of times used: " + newVariableHandler.clobUsage.ToString();
                InfoPanel.gameObject.SetActive(true);
                break;
            case 3:
                weaponName.text = "Current Attack: SSRI";
                weaponDescript.text = "Abilities: \n Selective Seratonin Reabsorbtion Inhibitors prevent the enemy's most important survival functions, due to this, this attack will lower both the enemy's health and energy.";
                weaponStats.text = "Effects: \n The more often you use this attack, the stronger it becomes. Consistency is key. If you do not use this attack over a period of 4 turns, its strength will reset. The enemy cannot become resistant to SSRIs.";
                numberOfTimesUsedText.text = "Number of times used: " + newVariableHandler.ssriUsage.ToString();
                InfoPanel.gameObject.SetActive(true);
                break;
            case 4:
                weaponName.text = "Current Attack: BETA BLOCKERS";
                weaponDescript.text = "Abilities: \n Beta Blockers block toxins from the enemy that cause you stress, and so the usage of Beta Blockers will increase your energy. The lower your energy, the power powerful this attack will be.";
                weaponStats.text = "Effects: \n Beta Blockers will also decrease the energy of the enemy. Your hit chance percentage will also increase.";
                numberOfTimesUsedText.text = "Number of times used: " + newVariableHandler.betaUsage.ToString();
                InfoPanel.gameObject.SetActive(true);
                break;
        }

    }

    public void deactivateButtons()
    {
        methylButton.gameObject.SetActive(false);
        clobButton.gameObject.SetActive(false);
        SSRIButton.gameObject.SetActive(false);
        betaButton.gameObject.SetActive(false);
        attackButton.gameObject.SetActive(false);
       // Debug.Log("ALL BUTTONS DEACTIVATED");
    }

    public void activateButtons()
    {
        methylButton.gameObject.SetActive(true);
        clobButton.gameObject.SetActive(true);
        SSRIButton.gameObject.SetActive(true);
        betaButton.gameObject.SetActive(true);
        attackButton.gameObject.SetActive(true);
       // Debug.Log("ALL BUTTONS ACTIVATED");
    }

    public void enableButtons()
    {
        methylButton.enabled = true;
        clobButton.enabled = true;
        SSRIButton.enabled = true;
        betaButton.enabled = true;
        attackButton.enabled = true;
       // Debug.Log("ALL BUTTONS ENABLED");

    }

    public void disableButtons()
    {
        methylButton.enabled = false;
        clobButton.enabled = false;
        SSRIButton.enabled = false;
        betaButton.enabled = false;
        attackButton.enabled = false;
       // Debug.Log("ALL BUTTONS DISABLED");
    }

    public bool attackSucessful(float hitChance)
    {
        int num = Random.Range(0, 100);
        if(num <= hitChance)
        {
            return true;
        }
        else
        {
            return false;
        }

        
    }




}
