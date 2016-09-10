describe("A suite is just a function", function() {
  var Kfad = require('../../src/kfad');

  it("div test", function(){
  	expect(kfad.mountDivFormGroup('')).toEqual("<div class='form-group'><div class='cols-sm-10'><div class='input-group'></div></div></div>");
  });

  it("input test", function(){
  	expect(kfad.mountInput('','','','','')).toEqual("<input name=''  value='' type='' class='' placeholder='' />");
  });
});