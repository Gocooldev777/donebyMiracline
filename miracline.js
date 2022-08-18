billing=[bill1={a:1000,b:2000,c:1000},
    bill2={a:300,b:400,c:100,d:200},
    bill3={a:3000,b:100,d:200},
]
    const averageOFBILLING=(object)=>{
        arr=[]
        for(i in object){
            arr.push(object[i])
        }
        sum=0
        avr=0
        len=arr.length
        for(j of arr){
            sum=sum+j
        }
           avr=sum/len
     return avr
    }
    const paidBY=(object)=>{
        averagee=averageOFBILLING(object)
        for(i in object){
            object[i]=object[i]-averagee
        }
        return object
    }
    for(i in billing){
    billing[i]=paidBY(billing[i])
    }                                                                          
    settling={}
    for(i=0;i<billing.length;i++){
        for(j in billing[i]){
            if(j in settling){
                settling[j]=settling[j]+billing[i][j]
            }
            else{
                settling[j]=billing[i][j]
            }
        }
    }
        
    persontoget={}
    persontopay={}
    for(i in settling){
        if(settling[i]==0){
            console.log(i+" No Need to pay")
        }
        else if(settling[i]<0){
            persontopay[i]=settling[i]
        }
        else if(settling[i]>0){
            persontoget[i]=settling[i]
        }
    }
    console.log(" persontoget:",persontoget)
    console.log(" persontopay:",persontopay)
    // Sorting the object in ascending order
    const sortASD=(Obj)=>{
        arr=[]
    for(k in Obj){
        arr.push(Obj[k])
    }
    
    function sort(a,b){
        return a-b
    }
    arr.sort(sort)
    personTOPAY={}
    for (a of arr){
        for(k in Obj){
            if(Obj[k]==a){
                personTOPAY[k]=a
            }
        }
    }
    return(personTOPAY)
    }
    // Sorting the object in Descending order
    const sortDES=(Obj)=>{
        arr=[]
    for(k in Obj){
        arr.push(Obj[k])
    }
    
    function sort(a,b){
        return a-b
    }
    arr.sort(sort)
    arr.reverse()
    personTOGET={}
    for (a of arr){
        for(k in Obj){
            if(Obj[k]==a){
                personTOGET[k]=a
            }
        }
    }
    return(personTOGET)
    }
    
    get=sortDES(persontoget)
    pay=sortASD(persontopay)
    const settled=(obj)=>{
        paid={}
        for(i in obj){
            if(obj[i]!=0){
                paid[i]=obj[i]
            }
        }
        return paid
    }
    
    persontopay = get
    persontoget = pay
    
    for(j in persontopay){
      for(i in persontoget){
        if(persontoget[i]!=0 & persontopay[j]!=0){
          if(persontoget[i]<Math.abs(persontopay[j])){
            console.log(`${i} has to pay ${j} : Rs.${Math.abs(persontoget[i].toFixed(2))}`)
            remaining=persontopay[j]+persontoget[i]
            persontopay[j]=remaining
            persontoget[i]=0
          }
          else if(persontoget[i]>Math.abs(persontopay[j])){
            console.log(`${j} has to pay ${i} : Rs.${Math.abs(persontopay[j].toFixed(2))}`)
            remaining=persontopay[j]+persontoget[i]
            persontopay[j]=0
            persontoget[i]=remaining
          }
          else if(persontoget[i]==Math.abs(persontopay[j])){
            console.log(`${j} has to pay ${i} : Rs.${Math.abs(persontoget[i].toFixed(2))}`)
            persontopay[j]=0
            persontoget[i]=0
          }
          else{
            break
          }
        }
      }
    }