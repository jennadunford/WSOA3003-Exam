using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class playerAttackFunctions : MonoBehaviour
{
    public Text outputBox;
    int methylphenidateStrength = 5;


    public void methylphenidateAttack(float energy)
    {
        //Debug.Log("Attacked sucessfully with methylphenidate!");
        newVariableHandler.enemyHealth -= (methylphenidateStrength * (energy / 400) + 10);
        newVariableHandler.playerHitChance += 0.5f;
        newVariableHandler.playerEnergy += 10f;
        outputBox.text = ("Attacked with methylphenidate! Enemy health decreased! Your hit chance has increased, your energy has increased.");
        GetComponent<newVariableHandler>().currentTurn = newVariableHandler.turnManager.afterPlayerTurn;


    }

    public void clobazamAttack(float health)
    {
        newVariableHandler.playerHealth += exponentialIncrease(health);
        newVariableHandler.enemyEnergy -= 10f;
        newVariableHandler.playerHitChance -= 0.5f;
        newVariableHandler.extraTurn = true;
        outputBox.text = "Used clobazam! Your health has increased! Enemy energy has decreased! Your hit chance has decreased. You've been given an extra turn! You will not be able to use clobazam for one turn.";
        this.GetComponent<selectButtons>().clobButton.enabled = false;
        this.GetComponent<selectButtons>().clobButton.image.color = Color.gray;
    }

    public void SSRIAttack(float energy)
    {
        newVariableHandler.enemyHealth -= 5 * newVariableHandler.SSRICounter;
        newVariableHandler.enemyEnergy -= 5 * newVariableHandler.SSRICounter;

        newVariableHandler.SSRICounter++;
        newVariableHandler.SSRIUsed++;
        outputBox.text = "Attacked with SSRIs! Enemy's health and energy has decreased! Current SSRI strength: " + newVariableHandler.SSRICounter.ToString() + ".";
        

    }

    public void betaBlockAttack(float energy)
    {
        newVariableHandler.playerEnergy += exponentialIncrease(energy);
        newVariableHandler.enemyEnergy -= 5 * energy / 400f;
        newVariableHandler.playerHitChance += 0.5f;
        outputBox.text = "Used beta blockers! Your energy has increased! Enemy energy has decreased! Your hit chance has increased.";

    }

    public void missedAttack()
    {
        outputBox.text = "Oh no! Your attack missed!";
        GetComponent<newVariableHandler>().currentTurn = newVariableHandler.turnManager.afterPlayerTurn;
    }

    public float exponentialIncrease(float value)
    {
        float result;
        result = Mathf.Clamp((Mathf.Exp((-0.012f * value) * 121.422f)), 1f, 120f);
        return result;
    }

}
