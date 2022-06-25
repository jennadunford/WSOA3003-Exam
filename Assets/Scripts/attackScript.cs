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
    
        
    }

    public void attack()
    {
        attackButton.gameObject.SetActive(false);
        if (selectButtons.selected == 0)
        {
            Debug.Log("no attack");
            attackButton.gameObject.SetActive(true);
        }
        else
        {
            this.GetComponent<newVariableHandler>().currentTurn = newVariableHandler.turnManager.afterPlayerTurn;
            attackButton.gameObject.SetActive(false);
            this.GetComponent<selectButtons>().deactivateButtons();
        }
       
    }


}
