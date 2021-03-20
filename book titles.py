file = open("stuff.txt", "r")
new = file.readlines()
ok = []
for i in new:
    ok.append(i.rstrip("\n"))
for x in ok:
    print(x[0] + str(len(x)))
file.close()

#from sololearn
#huh, maybe I should create a repo just for sololearn....
