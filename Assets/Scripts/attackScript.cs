using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class attackScript : MonoBehaviour
{
    public Button attackButton;
   

    public void attack()
    {
        if(GetComponent<newVariableHandler>().currentTurn == newVariableHandler.turnManager.playerTurn)
        {
            
            attackButton.gameObject.SetActive(false);
            if (selectButtons.selected == 0)
            {
               
                attackButton.gameObject.SetActive(true);
            }
            else
            {
                
                newVariableHandler.extraTurn = false;
                newVariableHandler.turns++;
                this.GetComponent<selectButtons>().clobButton.enabled = true;
                this.GetComponent<selectButtons>().clobButton.image.color = Color.white;
                this.GetComponent<selectButtons>().deactivateButtons();
            }
        }
       
       
    }


}
