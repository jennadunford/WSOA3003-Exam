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
            Debug.Log("In attack fuction!");
            attackButton.gameObject.SetActive(false);
            if (selectButtons.selected == 0)
            {
                Debug.Log("no attack");
                attackButton.gameObject.SetActive(true);
            }
            else
            {
                Debug.Log("Can attack!");
               // this.GetComponent<newVariableHandler>().currentTurn = newVariableHandler.turnManager.afterPlayerTurn;
                attackButton.gameObject.SetActive(false);
                this.GetComponent<selectButtons>().deactivateButtons();
            }
        }
       
       
    }


}
