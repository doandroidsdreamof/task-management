 const controllerTest = async (req, res) => {
try{
  res.status(200).json({ test: 'ok' });
}
catch(err){
  console.log("🚀 ~ file: test.js:6 ~ controllerTest ~ err", err)

}
};


module.exports = controllerTest
