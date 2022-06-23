using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class playerAttackFunctions : MonoBehaviour
{
    public Text outputBox;
    string outputText;
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

    }

    public void clobazamAttack(float energy)
    {

    }

    public void SSRIAttack(float energy)
    {
    }

    public void betaBlockAttack(float energy)
    {

    }

    public float exponentialIncrease(float value)
    {
        float result;
        result = Mathf.Clamp((Mathf.Exp((-0.012f * value) * 121.422f)), 1f, 120f);
        return result;
    }

}
