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
    // Start is called before the first frame update

    // Update is called once per frame
    private void Update()
    {
        if (Input.GetKeyDown(KeyCode.E))
        {
            displayPanel();
        }
    }
    public void selectMethyl()
    {
        selected = 1;
       // Debug.Log(selected + ": Methylphenidate is selected");
    

    }

    public void selectClob()
    {
        selected = 2;
        //Debug.Log(selected + ": Clobazam is selected");
    }

    public void selectSSRI()
    {
        selected = 3;
       // Debug.Log(selected + ": SSRI is selected");
    }

    public void selectBeta()
    {

        selected = 4;
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
                weaponName.text = "METHYLPHENIDATE";
                weaponDescript.text = "EXPLAIN METHYLPHENIDATE HERE BLAH BLAH BLAH";
                weaponStats.text = "THIS IS HOW MUCH DAMAGE IT DOES DEPENDING ON WHAT AND WHAT";
                InfoPanel.gameObject.SetActive(true);
                break;
            case 2:
                weaponName.text = "CLOBAZAM";
                weaponDescript.text = "EXPLAIN CLOBAZAM HERE BLAH BLAH BLAH";
                weaponStats.text = "THIS IS HOW MUCH DAMAGE IT DOES DEPENDING ON WHAT AND WHAT";
                InfoPanel.gameObject.SetActive(true);
                break;
            case 3:
                weaponName.text = "SSRI";
                weaponDescript.text = "EXPLAIN SSRIS HERE BLAH BLAH BLAH";
                weaponStats.text = "THIS IS HOW MUCH DAMAGE IT DOES DEPENDING ON WHAT AND WHAT";
                InfoPanel.gameObject.SetActive(true);
                break;
            case 4:
                weaponName.text = "BETA BLOCKERS";
                weaponDescript.text = "EXPLAIN BETA BLOCKERS HERE BLAH BLAH BLAH";
                weaponStats.text = "THIS IS HOW MUCH DAMAGE IT DOES DEPENDING ON WHAT AND WHAT";
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
        Debug.Log("ALL BUTTONS DEACTIVATED");
    }

    public void activateButtons()
    {
        methylButton.gameObject.SetActive(true);
        clobButton.gameObject.SetActive(true);
        SSRIButton.gameObject.SetActive(true);
        betaButton.gameObject.SetActive(true);
        attackButton.gameObject.SetActive(true);
        Debug.Log("ALL BUTTONS ACTIVATED");
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
