using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class playerAttackFunctions : MonoBehaviour
{
    public Text outputBox;
    int methylphenidateStrength = 5;
    // Start is called before the first frame update
    void Start()
    {

    }

    // Update is called once per frame
    void Update()
    {

    }

    public void methylphenidateAttack(float energy)
    {
        variableHandler.enemyHealth -= (methylphenidateStrength * (energy / 400) + 10);
        variableHandler.playerHitChance += 0.5f;
        variableHandler.playerEnergy += 10f;
        outputBox.text = ("Attacked with methylphenidate! Enemy health decreased! Your hit chance has increased, your energy has increased.");

    }

    public void clobazamAttack(float health)
    {
        variableHandler.playerHealth += exponentialIncrease(health);
        variableHandler.enemyEnergy -= 10f;
        variableHandler.playerHitChance -= 0.5f;

        outputBox.text = "Used clobazam! Your health has increased! Enemy energy has decreased! Your hit chance has decreased.";
    }

    public void SSRIAttack(float energy)
    {
        variableHandler.enemyHealth -= 5 * variableHandler.SSRICounter;
        variableHandler.enemyEnergy -= 5 * variableHandler.SSRICounter;

        variableHandler.SSRICounter++;
        outputBox.text = "Attacked with SSRIs! Enemy's health and energy has decreased! Current SSRI strength: " + variableHandler.SSRICounter.ToString() + ".";

    }

    public void betaBlockAttack(float energy)
    {
        variableHandler.playerEnergy += exponentialIncrease(energy);
        variableHandler.enemyEnergy -= 5 * energy / 400f;
        variableHandler.playerHitChance += 0.5f;
        outputBox.text = "Used beta blockers! Your energy has increased! Enemy energy has decreased! Your hit chance has increased.";

    }

    public float exponentialIncrease(float value)
    {
        float result;
        result = Mathf.Clamp((Mathf.Exp((-0.012f * value) * 121.422f)), 1f, 120f);
        return result;
    }

}
