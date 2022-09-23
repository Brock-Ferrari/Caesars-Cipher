function textProcessor()
{
    document.getElementById('res').innerHTML = rot13(document.getElementById('sub').value);
    return;
}

function rot13(str) 
{
    let strChar = str.toUpperCase().split('');
    let strShift = [];
    
    for (let i = 0; i < strChar.length; i++)
    {
        switch (strChar[i])
        {
            case 'A':
                strShift[i] = 'N';
                break;
            case 'B':
                strShift[i] = 'O';
                break;
            case 'C':
                strShift[i] = 'P';
                break;
            case 'D':
                strShift[i] = 'Q';    
                break;
            case 'E':
                strShift[i] = 'R';   
                break; 
            case 'F': 
                strShift[i] = 'S';  
                break;
            case 'G':
                strShift[i] = 'T';  
                break;
            case 'H':
                strShift[i] = 'U';  
                break;
            case 'I':
                strShift[i] = 'V';  
                break;
            case 'J':
                strShift[i] = 'W';  
                break;
            case 'K':
                strShift[i] = 'X';  
                break;
            case 'L':
                strShift[i] = 'Y';  
                break;
            case 'M':
                strShift[i] = 'Z';  
                break;
            case 'N':
                strShift[i] = 'A';  
                break;
            case 'O':
                strShift[i] = 'B';  
                break;
            case 'P':
                strShift[i] = 'C';  
                break;
            case 'Q':
                strShift[i] = 'D';  
                break;
            case 'R':
                strShift[i] = 'E';  
                break;
            case 'S':
                strShift[i] = 'F';  
                break;
            case 'T':
                strShift[i] = 'G';  
                break;
            case 'U':
                strShift[i] = 'H';  
                break;
            case 'V':
                strShift[i] = 'I';  
                break;
            case 'W':
                strShift[i] = 'J';  
                break;
            case 'X':
                strShift[i] = 'K';  
                break;
            case 'Y':
                strShift[i] = 'L';  
                break;
            case 'Z':
                strShift[i] = 'M';
                break;
            default:
                strShift[i] = strChar[i];
        }
    }
    return strShift.join('');
}