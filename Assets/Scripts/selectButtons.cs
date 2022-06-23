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
        Debug.Log(selected + ": Methylphenidate is selected");
    

    }

    public void selectClob()
    {
        selected = 2;
        Debug.Log(selected + ": Clobazam is selected");
    }

    public void selectSSRI()
    {
        selected = 3;
        Debug.Log(selected + ": SSRI is selected");
    }

    public void selectBeta()
    {

        selected = 4;
        Debug.Log(selected + ": Beta blockers is selected");
    }

    public void resetSelected()
    {
        switch (selected)
        {
            case 0:
                Debug.Log("No attack selected");
                happeningText.text = "No attack selected";
                break;
            case 1:
                Debug.Log("Attacked with methylphenidate");
                happeningText.text = "Attacked with methylphenidate";
                break;
            case 2:
                Debug.Log("Attacked with clobazam");
                happeningText.text = "Attacked with clobazam";
                break;
            case 3:
                Debug.Log("Attacked with SSRIs");
                happeningText.text = "Attacked with SSRIs";
                break;
            case 4:
                Debug.Log("Attacked with Beta Blockers");
                happeningText.text = "Attacked with Beta Blockers";
                break;
        }
        selected = 0;

        Debug.Log(selected + ": Reset selected");
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
    }

    public void activateButtons()
    {
        methylButton.gameObject.SetActive(true);
        clobButton.gameObject.SetActive(true);
        SSRIButton.gameObject.SetActive(true);
        betaButton.gameObject.SetActive(true);
    }




}
