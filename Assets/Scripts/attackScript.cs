using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class attackScript : MonoBehaviour
{
    public Button attackButton;
   
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        if(Input.GetKeyDown(KeyCode.Return))
        {

                if (GetComponent<variableHandler>().currentTurn.Equals(variableHandler.turnManager.playerTurn))
                {
                    attack();
                }
           
        }     
        
    }

    public void attack()
    {
        if(selectButtons.selected == 0)
        {
            Debug.Log("no attack");
        }
        else
        {
            this.GetComponent<variableHandler>().currentTurn = variableHandler.turnManager.afterPlayerTurn;
            attackButton.gameObject.SetActive(false);
            this.GetComponent<selectButtons>().deactivateButtons();
        }
       
    }


}
