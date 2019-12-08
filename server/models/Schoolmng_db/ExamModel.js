import ExamModelGenerated from "./generated/ExamModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = ExamModelGenerated.init();
  
      schema.add({
        extraCustomField: Object
      });
    },
     
   */


  /**
   * Override here your custom queries
   * EXAMPLE:
   *
   
    async get(id) {
      console.log("This is my custom query");
      return await ExamModelGenerated.getModel().findOne({ _id: id });
    }

   */


  /**
  * examModel.validate
  *   @description validate
  *
  */
  async validate(id) {
    let res = await ExamModelGenerated.getModel().findOneAndUpdate({ _id: id }, {valid: true}, {'new': true});
    return res;
  },
  

};

export default {
  ...ExamModelGenerated,
  ...customModel
};
