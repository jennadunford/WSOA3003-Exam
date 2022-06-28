using UnityEngine;
using UnityEngine.UI;

public class enemyAttackFunctions : MonoBehaviour
{
    public static string attackString = "";
    public static bool enemyAttacked = false;
    private float enemyBaseAttack = 5f;
    // Start is called before the first frame update

    // Update is called once per frame
    void Update()
    {
        if(!enemyAttacked && GetComponent<newVariableHandler>().currentTurn == newVariableHandler.turnManager.enemyTurn)
        {
            int num = Random.Range(0, 101);
            //Debug.Log("Random number generated for enemy attack chance: " + num);
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
        if(newVariableHandler.enemyHealth <  newVariableHandler.maxValue/4)
        {
            enemyHealthVeryLowAttacks();
            //do things for if health very low
        }
        else if(newVariableHandler.enemyEnergy < newVariableHandler.maxValue/4)
        {
            enemyEnergyVeryLowAttacks();
            //do things for if energy very low
        }else if(newVariableHandler.enemyHealth < newVariableHandler.maxValue/2)
        {
            enemyHealthLowAttacks();
            //do things for if health kinda low
        }else if(newVariableHandler.enemyEnergy < newVariableHandler.maxValue/2)
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
        int num = Random.Range(1,4);
       // Debug.Log("Random num between 1 and 3: " + num);
        switch (num)
        {
            case 1:
                increaseOwnHealthLow();
                break;
            case 2:
                attackPlayerHealthAndEnergy(newVariableHandler.enemyEnergy);
                break;
            case 3:
                attackPlayerHealth(newVariableHandler.enemyEnergy);
                break;
            default:
                enemyHealthLowAttacks();
                break;
        }

    }

    public void enemyHealthVeryLowAttacks()
    {
        int num = Random.Range(1,6);
        //Debug.Log("Random num between 1 and 5: " + num);
        switch (num)
        {
            case 1:
                increaseOwnHealthHigh();
                break;
            case 2:
                increaseOwnHealthLow();
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
            default:
                enemyHealthVeryLowAttacks();
                break;

        }

    }

    public void enemyEnergyLowAttacks()
    {
        int num = Random.Range(1,3);
        //Debug.Log("Random num between 1 and 2: " + num);
        switch (num)
        {
            case 1:
                increaseOwnEnergyLow(newVariableHandler.enemyEnergy);
                break;
            case 2:
                increaseHitChanceAndEnergy(newVariableHandler.enemyEnergy);
                break;
            default:
                enemyEnergyLowAttacks();
                break;
        }

    }

    public void enemyEnergyVeryLowAttacks()
    {
        int num = Random.Range(1,4);
       // Debug.Log("Random num between 1 and 3: " + num);
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
            default:
                enemyEnergyVeryLowAttacks();
                break;
        }

    }

    public void regularAttacks()
    {
        
        int num = Random.Range(1, 5);
        //Debug.Log("Random num between 1 and 4: " + num);
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
               int num2 = Random.Range(1, 4);
                switch (num2)
                {
                    case 1:
                        if (newVariableHandler.methylUsage >= 3)
                        {
                            newVariableHandler.methylResistant = true;
                            disablePlayerAttack(GetComponent<selectButtons>().methylButton);
                        }
                        else
                        {
                            regularAttacks();
                        }

                        break;
                    case 2:
                        if (newVariableHandler.betaUsage >= 3)
                        {
                            newVariableHandler.betaResistant = true;
                            disablePlayerAttack(GetComponent<selectButtons>().betaButton);
                        }
                        else
                        {
                            regularAttacks();
                        }


                        break;
                    case 3:
                        if(newVariableHandler.clobUsage >= 3)
                        {
                            newVariableHandler.clobResistant = true;
                            disablePlayerAttack(GetComponent<selectButtons>().clobButton);

                        }
                        else
                        {
                            regularAttacks();
                        }
                        break;
                }
                
                 
                
                break;
            default:
                regularAttacks();
                break;
        }

    }

    public void attackPlayerHealth(float enemyEnergy)
    {
        Debug.Log("Attacked player health");
        newVariableHandler.playerHealth -= enemyBaseAttack + (((enemyEnergy / newVariableHandler.maxValue) * 100)/2);
        attackString = "The enemy has damaged your health!";

    }

    public void attackPlayerEnergy(float enemyEnergy)
    {
        Debug.Log("Attacked player energy");
        newVariableHandler.playerEnergy -= enemyBaseAttack + (((enemyEnergy / newVariableHandler.maxValue) * 100)/2);
        attackString = "The enemy has damaged your energy";
    }

    public void attackPlayerHealthAndEnergy(float enemyEnergy)
    {
        Debug.Log("Attacked player health and energy");
        newVariableHandler.playerEnergy -= enemyBaseAttack + (((enemyEnergy / newVariableHandler.maxValue) * 100)/2);
        newVariableHandler.playerHealth -= enemyBaseAttack + (((enemyEnergy / newVariableHandler.maxValue) * 100)/2);
        attackString = "The enemy has damaged your health and energy!";
    }

    public void increaseOwnEnergyHigh(float enemyEnergy)
    {
        Debug.Log("Increased own energy high");
        newVariableHandler.enemyEnergy += enemyEnergy * 1.5f;
        attackString = "The enemy has drawn enough power to increase its own energy by a small amount.";
    }

    public void increaseOwnEnergyLow(float enemyEnergy)
    {
        Debug.Log("Increased own energy low");
        newVariableHandler.enemyEnergy += exponentialIncrease(enemyEnergy);
        attackString = "The enemy has summoned all of its strength to increase its own energy substantially!";
    }
    public void increaseOwnHealthLow()
    {
        Debug.Log("increased own health low");
        newVariableHandler.enemyHealth += exponentialIncrease(newVariableHandler.enemyHealth);

        attackString = "The enemy has summoned all its power to increase its health by a large amount!";
    }

    public void increaseOwnHealthHigh()
    {
        Debug.Log("Increased own health high");
        newVariableHandler.enemyHealth += newVariableHandler.enemyHealth * 1.5f;

        attackString = "The enemy has drawn enough power to increase its own health by a small amount.";
    }

    public void disablePlayerAttack(Button attackButton)
    {
        Debug.Log("disabling a player's attack");
        attackString = "The enemy has become resistant to your " + attackButton.GetComponentInChildren<Text>().text + " attack!";
    }

    public void rageHealthAndChance(float enemyEnergy)
    {
        Debug.Log("Rage - damage player health and hit chance");
        newVariableHandler.playerHealth -= (enemyBaseAttack + ((enemyEnergy / newVariableHandler.maxValue) * 100)/2)+10f;
        newVariableHandler.playerHitChance -= 2.5f;
        attackString = "The energy cries out with rage! The enemy  damages your health and hit chance.";
    }

    public void increaseHitChanceAndEnergy(float enemyEnergy)
    {
        Debug.Log("increase own hit chance and energy");
        newVariableHandler.enemyEnergy += enemyEnergy * 1.5f;
        newVariableHandler.enemyHitChance += 0.5f;
        attackString = "The enemy has increased its hit chance along with its energy!";
    }

    public void restoreFullHealthDecreaseEnergy()
    {
        Debug.Log("Restored full health");
        newVariableHandler.enemyHealth = newVariableHandler.maxValue;
        attackString = "You are filled with despair! The enemy has somehow managed to restore its health entirely!";
    }

    public void missedAttack()
    {
        Debug.Log("Enemy missed attack");
        attackString = "The enemy's attack missed!";
    }

    public float exponentialIncrease(float value)
    {
        float result;
        result = (Mathf.Clamp((Mathf.Exp(-0.012f * value) * 121.422f), 1f, 120f));
        return result;
    }
}
