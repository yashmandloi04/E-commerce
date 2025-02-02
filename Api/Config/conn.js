require('mongoose') 
.connect('mongodb://0.0.0.0:27017/Project_Ecomm')
// .connect('mongodb+srv://mandloiyash04official1:V1diLybWL6p7LsSw@cluster0.4f0if.mongodb.net/')
.then(()=>{
  console.log('MongoDB connected')
})
.catch((err)=>{
  console.log('MongoDB not connected ',err)
})

// Uername: mandloiyash04official1
// Password: V1diLybWL6p7LsSw