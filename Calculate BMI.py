def bmi(weight, height):
    #your code here
    result = weight/(height**2)
    
    if(result <= 18.2):
        return "Underweight"
    elif(result <= 25.0):
        return "Normal"
    elif(result <= 30.0):
        return "Overweight"
    elif(result > 30.0):
        return "Obese"
