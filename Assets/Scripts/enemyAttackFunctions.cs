using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class enemyAttackFunctions : MonoBehaviour
{
    public static string attackString = "";
    public static bool enemyAttacked = false;
    // Start is called before the first frame update

    // Update is called once per frame
    void Update()
    {
        if(!enemyAttacked && GetComponent<newVariableHandler>().currentTurn == newVariableHandler.turnManager.enemyTurn)
        {
            int num = Random.Range(0, 100);
            if(num <= newVariableHandler.enemyHitChance)
            {
                enemyAttacked = true;
                enemyAttack();             
            }
            else
            {
                enemyAttacked = true;
                missedAttack();
            }
        }
       
    }

    public void enemyAttack()
    {
        if(newVariableHandler.enemyHealth < (2 / 10) * newVariableHandler.maxValue)
        {
            enemyHealthVeryLowAttacks();
            //do things for if health very low
        }
        else if(newVariableHandler.enemyEnergy < (2/10) * newVariableHandler.maxValue)
        {
            enemyEnergyVeryLowAttacks();
            //do things for if energy very low
        }else if(newVariableHandler.enemyHealth < (4 / 10) * newVariableHandler.maxValue)
        {
            enemyHealthLowAttacks();
            //do things for if health kinda low
        }else if(newVariableHandler.enemyEnergy < (4/10)* newVariableHandler.maxValue)
        {
            enemyEnergyLowAttacks();

            //do things if energy is kinda low
        }
        else
        {
            //just do regular attacks then
            regularAttacks();
        }

    }

    public void enemyHealthLowAttacks()
    {
        int num = 0;
        switch (num)
        {
            case 1:
                increaseOwnHealthLow(newVariableHandler.enemyEnergy);
                break;
            case 2:
                attackPlayerHealthAndEnergy(newVariableHandler.enemyEnergy);
                break;
            case 3:
                attackPlayerHealth(newVariableHandler.enemyEnergy);
                break;
        }

    }

    public void enemyHealthVeryLowAttacks()
    {
        int num = 0;
        switch (num)
        {
            case 1:
                increaseOwnHealthHigh(newVariableHandler.enemyEnergy);
                break;
            case 2:
                increaseOwnHealthLow(newVariableHandler.enemyEnergy);
                break;
            case 3:
                attackPlayerEnergy(newVariableHandler.enemyEnergy);
                break;
            case 4:
                int num2 = Random.Range(0, 200);
                if(num2 <= 5)
                {
                    restoreFullHealthDecreaseEnergy();
                }
           
                break;
            case 5:
                rageHealthAndChance(newVariableHandler.enemyEnergy);
                break;
        }

    }

    public void enemyEnergyLowAttacks()
    {
        int num = Random.Range(1,2);
        switch (num)
        {
            case 1:
                increaseOwnEnergyLow(newVariableHandler.enemyEnergy);
                break;
            case 2:
                increaseHitChanceAndEnergy(newVariableHandler.enemyEnergy);
                break;
        }

    }

    public void enemyEnergyVeryLowAttacks()
    {
        int num = Random.Range(1,3);
        switch (num)
        {
            case 1:
                increaseOwnEnergyHigh(newVariableHandler.enemyEnergy);
                break;
            case 2:
                increaseHitChanceAndEnergy(newVariableHandler.enemyEnergy);
                break;
            case 3:
                attackPlayerHealthAndEnergy(newVariableHandler.enemyEnergy);
                break;
        }

    }

    public void regularAttacks()
    {
        
        int num = Random.Range(1, 4);
        switch (num)
        {
            case 1:
                attackPlayerHealth(newVariableHandler.enemyEnergy);
                break;
            case 2:
                attackPlayerEnergy(newVariableHandler.enemyEnergy);
                break;
            case 3:
                attackPlayerHealthAndEnergy(newVariableHandler.enemyEnergy);
                break;
            case 4:
                if (newVariableHandler.methylUsage >= 3)
                {
                    newVariableHandler.methylResistant = true;
                    disablePlayerAttack(GetComponent<selectButtons>().methylButton);
                }
                else if (newVariableHandler.clobUsage >= 3)
                {
                    newVariableHandler.clobResistant = true;
                    disablePlayerAttack(GetComponent<selectButtons>().clobButton);
                }
                else if (newVariableHandler.betaUsage >= 3)
                {
                    newVariableHandler.betaResistant = true;
                    disablePlayerAttack(GetComponent<selectButtons>().betaButton);
                }
                else
                {
                    regularAttacks();
                }

                break;
            default:
                regularAttacks();
                break;
        }

    }

    public void attackPlayerHealth(float enemyEnergy)
    {
        attackString = "The enemy has damaged your health!";

    }

    public void attackPlayerEnergy(float enemyEnergy)
    {
        attackString = "The enemy has damaged your energy";
    }

    public void attackPlayerHealthAndEnergy(float enemyEnergy)
    {
        attackString = "The enemy has damaged your health and energy!";
    }

    public void increaseOwnEnergyLow(float enemyEnergy)
    {
        attackString = "The enemy has drawn enough power to increase its own energy by a small amount.";
    }

    public void increaseOwnEnergyHigh(float enemyEnergy)
    {
        attackString = "The enemy has damaged your health! has summoned all of its strength to increase its own energy substantially!";
    }
    public void increaseOwnHealthHigh(float enemyEnergy)
    {
        attackString = "The enemy has summoned all its power to increase its health by a large amount!";
    }

    public void increaseOwnHealthLow(float enemyEnergy)
    {
        attackString = "The enemy has drawn enough power to increase its own health by a small amount.";
    }

    public void disablePlayerAttack(Button attackButton)
    {
        attackString = "The enemy has become resistant to one of your attacks for a turn!";
    }

    public void rageHealthAndChance(float enemyEnergy)
    {
        attackString = "The energy cries out with rage! The enemy substantially damages your health and hit chance.";
    }

    public void increaseHitChanceAndEnergy(float enemyEnergy)
    {
        attackString = "The enemy has increased its hit chance along with its energy!";
    }

    public void restoreFullHealthDecreaseEnergy()
    {
        attackString = "You are filled with despair! The enemy has somehow managed to restore its health entirely!";
    }

    public void missedAttack()
    {
        attackString = "The enemy's attack missed!";
    }
}
