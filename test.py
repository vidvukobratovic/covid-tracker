f = open("listofcountries.txt", "r")

list_of_countries = []

for line in f:
    if line.startswith('"'):
        list_of_countries.append(line.strip("'\n'").replace('"',''))

list_of_countries.sort()
print(list_of_countries)