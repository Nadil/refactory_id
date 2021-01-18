mport datetime as d


def Kasir(warung, tanggal, waktu, kasir, produk):
   
  str_1 = "\tWarung Makan " + warung + '\n'
  if(len(str_1) <= 30):
    print("\tWarung Makan " + warung + '\n' )
  else:
    print("\tWarung Makan \n ")
    print("\t" + warung +"\n")

  print("Tanggal :	" + tanggal.strftime("%Y/%m/%d ") + waktu.strftime("%H:%M:%S") + '\n')

  str_2 = "Nama Kasir :\t\t\t" + kasir + '\n'
  if(len(str_2) <= 30):
    print("Nama Kasir :\t\t\t" + kasir + '\n')
  else:
    print("Nama Kasir :\t\t\t \n ")
    print("\t\t" + kasir +"\n")

  
  print('===============================\n')
  
  for x in produk:
    total = 0
    str_3 = str(x) + "...................Rp" + str(produk[x]) +'\n'
    
    if(len(str_3) <= 30):
      print(str(x) + "...................Rp" + str(produk[x]) +'\n')
    else:
      print(str(x) + ".........................\n\n" + "\tRp"+ str(produk[x]) +'\n')
    total += int(produk[x])
  
  print('\n')
  str_4 = "Total...................Rp" + str(total)
  if(len(str_4) <= 30):
      print("Total...................Rp" + str(total))
  else:
      print("Total.........................\n\n" + str(total))


warung = str(input("Enter nama warung : "))
tahun = int(input("Enter tahun : "))
bulan = int(input("Enter bulan : "))
hari = int(input("Enter hari : "))
tanggal = d.datetime(tahun,bulan,hari)
waktu = d.datetime.now()
kasir = str(input("Enter nama kasir : "))
#total = 0
n = int(input("Enter jumlah produk : ")) 
produk = dict(input().split() for _ in range(n))  
Kasir(warung, tanggal, waktu, kasir, produk)
