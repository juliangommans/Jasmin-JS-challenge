
describe("cookie", function(){

  var yum;

  beforeEach(function(){
    yum = new cookie("afghan",3);
  });

    it("creates a cookie with a type and cooking time", function(){
      expect(yum.name).toBe("afghan");
      expect(yum.cook_time).toBe(3);
     });

    it("creates a cookie that is raw", function(){
    expect(yum.status).toBe("raw");
    });
});

describe("bake", function(){

  var yum;

  beforeEach(function(){
    yum = new cookie("afghan",3);
    bake(yum);
  });

    it("reduces the cookies cooking timer",function(){
      expect(yum.cook_time).toBe(2);
    });

    it("changes the cookie state to 'still_gooey'",function(){
      expect(yum.status).toBe("still_gooey");
    });

    it("changes the cookie state to 'just_right'",function(){
      bake(yum);
      bake(yum);
      expect(yum.status).toBe("just_right");
    });

     it("changes the cookie state to 'crispy'",function(){
      bake(yum);
      bake(yum);
      bake(yum);
      expect(yum.status).toBe("crispy");
    });

});

describe("oven", function(){
  var captain;
  var chocolate;

  beforeEach(function(){
    chocolate = new cookie("chocolate",3);
    captain = new oven();
  });

    it("creates an empty oven",function(){
      expect(captain.contents.length).toBe(0);
    });

    it("has a default max size of 3",function(){
      expect(captain.maxSize).toBe(3);
    });

    it("allows you to add an item to the oven",function(){
      captain.add(chocolate);
      expect(captain.contents.length).toBe(1);
    });

    it("allows you to remove an item from the oven",function(){
      captain.add(chocolate);
      captain.remove(chocolate);
      expect(captain.contents.length).toBe(0);
    });

    it("cooks a cookie",function(){
      captain.add(chocolate);
      captain.cook();
      expect(chocolate.status).toBe("still_gooey");
    });
});