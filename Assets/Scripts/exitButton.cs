using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class exitButton : MonoBehaviour
{
   public void exitGame()
    {
        Application.Quit();
    }

    public void loadGame()
    {
        SceneManager.LoadScene("gameScene");
        Debug.Log("Load the game");
    }
}
