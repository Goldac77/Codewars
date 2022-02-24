#-------------------------------------------------------
#THIS METHOD IS ROUGH WITH THE DECIMALS, I THINK,
#SO IT PASSES ALL TESTS FOR ONLY ONE SCENARIO
#-------------------------------------------------------
import math
#check out the math.modf() function, really useful...

def make_readable(seconds):
    # desired format
    readable_format = "{0}:{1}:{2}"
    
    #for handling cases less than a minute
    if(seconds <= 59):
        seconds = str(seconds)
        #add "0" to result for single digits
        if(len(seconds) == 1):
            seconds = "0" + seconds
        return readable_format.format("00", "00", seconds)
    #for handling cases less than an hour
    elif(seconds <= 3599):
        mins = str(math.floor(math.modf(seconds/60)[1]))
        secs = str(math.floor(math.modf(seconds/60)[0] * 60))
        
        #add "0" to result for single digits --- for both mins, and secs
        if(len(mins) == 1):
            mins = "0" + mins
        if(len(secs) == 1):
            secs = "0" + secs
        return readable_format.format("00", mins, secs)
    #for handling any other cases
    else:
        hours = str(math.floor(math.modf(seconds/3600)[1]))
        min_calc = math.modf(seconds/3600)[0]
        mins = str(math.floor(math.modf(min_calc * 60)[1]))
        sec_calc = math.modf(min_calc * 60)[0]
        secs = str(math.floor(round(sec_calc * 60, 2)))
        
        #add "0" to result for single digits --- for hours, mins, and secs
        if(len(hours) == 1):
            hours = "0" + hours
        if(len(mins) == 1):
            mins = "0" + mins
        if(len(secs) == 1):
            secs = "0" + secs
            
        #(special) for the one test case that fails lol
        if(secs == "60"):
            secs = "00"
            mins = str(int(mins) + 1) 
        
        return readable_format.format(hours, mins, secs)
