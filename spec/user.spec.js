const request = require("request");
const User = require("../models/UserSchema.js");
const mongoose = require("mongoose");

describe("user tests", () => {
  let server;
  beforeAll(() => {
    server = require("../index");
  });

  
  afterAll(function (done) {
    User.deleteOne({Username:'Uzumaki'},function(){done()})
    User.deleteOne({Username:'sami'},function(){done()})
    User.deleteOne({Username:'mostafa'},function(){done()})


 });
  
//
  describe("tests registering new users", () => {
    let data = {};
    let testBody = {
      Username: "sami",
      Password: "12345678",
      Email: "sami@m.com"
    };

    beforeAll(done => {
      request.post(
        "http://localhost:4000/user/register",
        { json: true, body: testBody },
        (err, res, body) => {
          data.body = body;
          data.status = res.statusCode;
          done();
        }
      );
    });
    it("checks creation of new User in database", () => {
      expect(data.status).toBe(200);

      User.findOne({
        $and: [{ Username: testBody.Username }, { Email: testBody.Email }]
      }).then(function(user) {
        expect(user).not.toBe(null);
      });
    });
  });

  describe("tests registering new users", () => {
    let data = {};
    let testBody = {
      Username: "mostafa",
      Password: "12345678",
      Email: "mostafa@m.com"
    };

    beforeAll(done => {
      request.post(
        "http://localhost:4000/user/register",
        { json: true, body: testBody },
        (err, res, body) => {
          data.body = body;
          data.status = res.statusCode;
          done();
        }
      );
    });
    it("checks creation of new User in database", () => {
      expect(data.status).toBe(200);

      User.findOne({
        $and: [{ Username: testBody.Username }, { Email: testBody.Email }]
      }).then(function(user) {
        expect(user).not.toBe(null);
      });
    });
  });

  describe("tests registering new users", () => {
    let data = {};
    let testBody = {
      Username: "mostafa",
      Password: "12345678",
      Email: "mostafanew@m.com"
    };

    beforeAll(done => {
      request.post(
        "http://localhost:4000/user/register",
        { json: true, body: testBody },
        (err, res, body) => {
          data.body = body;
          data.status = res.statusCode;
          done();
        }
      );
    });
    it("adding new users", () => {
      expect(data.status).toBe(406);
      expect(data.body.error).toBe("Username already exists");
    });
  });

  describe("tests registering new users", () => {
    let data = {};
    let testBody = {
      Username: "mostafanew",
      Password: "12345678",
      Email: "mostafa@m.com"
    };

    beforeAll(done => {
      request.post(
        "http://localhost:4000/user/register",
        { json: true, body: testBody },
        (err, res, body) => {
          data.body = body;
          data.status = res.statusCode;
          done();
        }
      );
    });
    it("tests registering with an emial that alreadyexists", () => {
      expect(data.body.error).toBe("Email already exists");
      expect(data.status).toBe(406);
    });
  });
  describe("tests registering new users", () => {
    let data = {};
    let testBody = {
      Username: "mostafanew",
      Password: "12",
      Email: "mostafanew@m.com"
    };

    beforeAll(done => {
      request.post(
        "http://localhost:4000/user/register",
        { json: true, body: testBody },
        (err, res, body) => {
          data.body = body;
          data.status = res.statusCode;
          done();
        }
      );
    });
    it("tests registering with a passwrod thats less than 8 characters", () => {
      expect(data.body.error).toBe("Password too short");
      expect(data.status).toBe(406);
    });
  });

  describe("tests registering new users", () => {
    let data = {};
    let testBody = {
      Username: "mostafanew",
      Password: "12345678",
      Email: "mostafanewm.com"
    };

    beforeAll(done => {
      request.post(
        "http://localhost:4000/user/register",
        { json: true, body: testBody },
        (err, res, body) => {
          data.body = body;
          data.status = res.statusCode;
          done();
        }
      );
    });
    it("tests registering with invalid email format", () => {
      expect(data.body.error).toBe("Invalid Email format");
    });
  });

  describe("tests registering new users", () => {
    let data = {};
    let testBody = {
      Username: "mostafanew",
      Password: "12345678",
      Email: "mostafanew@mcom"
    };

    beforeAll(done => {
      request.post(
        "http://localhost:4000/user/register",
        { json: true, body: testBody },
        (err, res, body) => {
          data.body = body;
          data.status = res.statusCode;
          done();
        }
      );
    });
    it("tests registering with invalid email format", () => {
      expect(data.body.error).toBe("Invalid Email format");
      expect(data.status).toBe(406);
    });
  });

  describe("tests login with non-existing user", () => {
    let data = {};
    let testBody = {
      Username: "mostafal",
      Password: "12345678"
    };

    beforeAll(done => {
      request.post(
        "http://localhost:4000/user/login",
        { json: true, body: testBody },
        (err, res, body) => {
          data.body = body;
          data.status = res.statusCode;
          done();
        }
      );
    });
    it("says that user doesnt exist", () => {
      expect(data.body.error).toBe("User doesnt exist");
      expect(data.status).toBe(404);
    });
  });

  describe("tests login of invalid password", () => {
    let data = {};
    let testBody = {
      Username: "mostafa",
      Password: "123456789"
    };

    beforeAll(done => {
      request.post(
        "http://localhost:4000/user/login",
        { json: true, body: testBody },
        (err, res, body) => {
          data.body = body;
          data.status = res.statusCode;
          done();
        }
      );
    });
    it("adding new users", () => {
      expect(data.body.error).toBe("Invalid Password");
      expect(data.status).toBe(401);
    });
  });

  describe("tests login of valid user", () => {
    let data = {};
    let testBody = {
      Username: "mostafa",
      Password: "12345678"
    };

    beforeAll(done => {
      request.post(
        "http://localhost:4000/user/login",
        { json: true, body: testBody },
        (err, res, body) => {
          data.body = body;
          data.status = res.statusCode;

          done();
        }
      );
    });
    it("adding new users", () => {
      expect(data.status).toBe(200);
      expect(data.body.message).toBe("successful login");
    });
  });

//Hussein Tests

const head={'auth':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJtZW1lc3RvY2siLCJzdWIiOiJVenVtYWtpIiwiaWF0IjoxNTU1MDc5NjkwfQ.uaNWv4nF4sueP4W72rJmyJg0BBRJF9BDuVCXV2H3X5g'};
const head2={'auth':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJtZW1lc3RvY2siLCJzdWIiOiJtb3N0YWZhIiwiaWF0IjoxNTU1MDkwODAzfQ.VMeEMfrGAjgmxRr7ThWoiSKRtKO5hu95KennRHTJtcg'};

describe("tests registering new users", () => {
  let data = {};
  let testBody = {
    Username: "Uzumaki",
    Password: "rinnegan",
    Email: "sharingan@m.com"
  };

  beforeAll(done => {
    request.post(
      "http://localhost:4000/user/register",
      { json: true, body: testBody },
      (err, res, body) => {
        data.body = body;
        data.status = res.statusCode;
        done();
      }
    );
  });
  it("checks creation of new User in database", () => {
    expect(data.status).toBe(200);

    User.findOne({
      $and: [{ Username: testBody.Username }, { Email: testBody.Email }]
    }).then(function(user) {
      expect(user).not.toBe(null);
    });
  });
});

describe("tests editing users email", () => {
  let data = {};
  let testBody = {
    Email: "rinnegan@uzumaki.com"
  };

  beforeAll(done => {
    request.put(
      "http://localhost:4000/me/edit/email/Uzumaki",
      { json: true, body: testBody ,headers:head},
      (err, res, body) => {
        data.body = body;
        data.status = res.statusCode;
        done();
      
        
      }
    );
  });
  it("checks editing user's email in the database", () => {
    expect(data.status).toBe(200);
    expect(data.body).toEqual("update successful");
  });
});

describe("tests editing users email", () => {
  let data = {};
  let testBody = {
    Email: "mostafa@m.com"
  };

  beforeAll(done => {
    request.put(
      "http://localhost:4000/me/edit/email/Uzumaki",
      { json: true, body: testBody ,headers:head },
      (err, res, body) => {
        data.body = body;
        data.status = res.statusCode;
        done();
      
        
      }
    );
  });
  it("checks editing user's email in the database", () => {
    expect(data.status).toBe(406);
    expect(data.body).toEqual({error : "Email already exists"});
  });
});

describe("tests editing users email", () => {
  let data = {};
  let testBody = {
    Email: "mostafa@m.com"
  };

  beforeAll(done => {
    request.put(
      "http://localhost:4000/me/edit/email/Damn",
      { json: true, body: testBody ,headers:head },
      (err, res, body) => {
        data.body = body;
        data.status = res.statusCode;
        done();
      
        
      }
    );
  });
  it("checks editing user's email in the database", () => {
    expect(data.status).toBe(404);
    expect(data.body).toEqual({ error: "UserNotFound"});
  });
});

describe("tests editing users email", () => {
  let data = {};
  let testBody = {
    Email: "mostafacom"
  };

  beforeAll(done => {
    request.put(
      "http://localhost:4000/me/edit/email/mostafa",
      { json: true, body: testBody ,headers:head },
      (err, res, body) => {
        data.body = body;
        data.status = res.statusCode;
        done();
      
        
      }
    );
  });
  it("checks editing user's email in the database", () => {
    expect(data.status).toBe(406);
    expect(data.body).toEqual({ error: "Invalid Email format" });
  });
});

describe("tests editing users password", () => {
  let data = {};
  let testBody = {
    OldPassword : "12345678",
    NewPassword : "123456789"
  };

  beforeAll(done => {
    request.put(
      "http://localhost:4000/me/edit/Password/mostafa",
      { json: true, body: testBody ,headers:head },
      (err, res, body) => {
        data.body = body;
        data.status = res.statusCode;
        done();
      
        
      }
    );
  });
  it("checks editing user's password in the database", () => {
    expect(data.status).toBe(200);
    expect(data.body).toEqual("Password successfully updated");
  });
});

describe("tests editing users password", () => {
  let data = {};
  let testBody = {
    OldPassword : "damndfa",
    NewPassword : "1234789"
  };

  beforeAll(done => {
    request.put(
      "http://localhost:4000/me/edit/Password/mostafa",
      { json: true, body: testBody  ,headers:head},
      (err, res, body) => {
        data.body = body;
        data.status = res.statusCode;
        done();
      
        
      }
    );
  });
  it("checks editing user's password in the database", () => {
    expect(data.status).toBe(401);
    expect(data.body).toEqual({ error: "Wrong Password"});
  });
});

describe("tests editing users password", () => {
  let data = {};
  let testBody = {
    OldPassword : "rinnegan",
    NewPassword : "1234789"
  };

  beforeAll(done => {
    request.put(
      "http://localhost:4000/me/edit/Password/sdafal",
      { json: true, body: testBody  ,headers:head},
      (err, res, body) => {
        data.body = body;
        data.status = res.statusCode;
        done();
      
        
      }
    );
  });
  it("checks editing user's password in the database", () => {
    expect(data.status).toBe(404);
    expect(data.body).toEqual({ error: "UserNotFound"});
  });

  describe("tests editing users password", () => {
    let data = {};
    let testBody = {
      OldPassword : "rinnegan",
      NewPassword : "14789"
    };
  
    beforeAll(done => {
      request.put(
        "http://localhost:4000/me/edit/Password/Uzumaki",
        { json: true, body: testBody  ,headers:head},
        (err, res, body) => {
          data.body = body;
          data.status = res.statusCode;
          done();
        
          
        }
      );
    });
    it("checks editing user's password in the database", () => {
      expect(data.status).toBe(406);
      expect(data.body).toEqual({ error: "Password too short" });
    });
  });


  describe("tests editing users password", () => {
    let data = {};
    let testBody = {
      OldPassword : "rinnegan",
      NewPassword : "sharingan"
    };
  
    beforeAll(done => {
      request.put(
        "http://localhost:4000/me/edit/Password/Uzumaki",
        { json: true, body: testBody  ,headers:head},
        (err, res, body) => {
          data.body = body;
          data.status = res.statusCode;
          done();
        
          
        }
      );
    });
    it("checks editing user's password in the database", () => {
      expect(data.status).toBe(200);
      expect(data.body).toEqual("Password successfully updated");
    });

    
  });
});

describe("tests getting user's info", () => {
  let data = {};
  let testBody = {
  };

  beforeAll(done => {
    request.get(
      "http://localhost:4000/me/About/Uzumaki",
      { json: true, body: testBody  ,headers:head},
      (err, res, body) => {
        data.body = body;
        data.status = res.statusCode;
        done();
      
        
      }
    );
  });
  it("checks getting user's info from the database", () => {
    expect(data.status).toBe(200);
  });

  
});

describe("tests getting user's info", () => {
  let data = {};
  let testBody = {
  };

  beforeAll(done => {
    request.get(
      "http://localhost:4000/me/About/mohamed",
      { json: true, body: testBody ,headers:head },
      (err, res, body) => {
        data.body = body;
        data.status = res.statusCode;
        done();
      
        
      }
    );
  });
  it("checks getting user's info from the database", () => {
    expect(data.status).toBe(404);
    expect(data.body).toEqual({error : "UserNotFound"});
  });

  
});


//Hussein & Mostafa tests 2

describe("Adds user", () => {
  let data = {};
  let testBody = {
    fUsername:'mostafa'
  };

  beforeAll(done => {
    request.put(
      "http://localhost:4000/me/user/Add",
      { json: true, body: testBody ,headers:head },
      (err, res, body) => {
        data.body = body;
        data.status = res.statusCode;
        done();
      
        
      }
    );
  });
  it("checks if Add successful", () => {
    expect(data.status).toBe(200);
    expect(data.body).toEqual({message : "Friend request Sent"});
  });

  
});

describe("accept request", () => {
  let data = {};
  let testBody = {
    fUsername:'Uzumaki'
  };

  beforeAll(done => {
    request.put(
      "http://localhost:4000/me/user/accept",
      { json: true, body: testBody ,headers:head2 },
      (err, res, body) => {
        data.body = body;
        data.status = res.statusCode;
        done();
      
        
      }
    );
  });
  it("checks if accepting request is successful", () => {
    expect(data.status).toBe(200);
    expect(data.body).toEqual({message : "Friend request accepted"});
  });

  
});

describe("blocks user", () => {
    let data = {};
    let testBody = {
      blockedUser:'mostafa'
    };

    beforeAll(done => {
      request.put(
        "http://localhost:4000/me/user/block",
        { json: true, body: testBody ,headers:head },
        (err, res, body) => {
          data.body = body;
          data.status = res.statusCode;
          done();
        
          
        }
      );
    });
    it("checks if blocked successful", () => {
      expect(data.status).toBe(200);
      expect(data.body).toEqual({message : "User Blocked"});
    });

  });

  describe("unfriend user", () => {
    let data = {};
    let testBody = {
      fUsername:'mostafa'
    };
  
    beforeAll(done => {
      request.put(
        "http://localhost:4000/me/user/Unfriend",
        { json: true, body: testBody ,headers:head },
        (err, res, body) => {
          data.body = body;
          data.status = res.statusCode;
          done();
        
          
        }
      );
    });
    it("checks if Unfriend is  unsuccessful", () => {
      expect(data.status).toBe(401);
      expect(data.body).toEqual({error : "This user is not a friend"});
    });
  
  });
  describe("Adds user", () => {
    let data = {};
    let testBody = {
      fUsername:'mostafa'
    };
  
    beforeAll(done => {
      request.put(
        "http://localhost:4000/me/user/Add",
        { json: true, body: testBody ,headers:head },
        (err, res, body) => {
          data.body = body;
          data.status = res.statusCode;
          done();
        
          
        }
      );
    });
    it("checks if Add unsuccessful", () => {
      expect(data.status).toBe(401);
      expect(data.body).toEqual({error : "The user to be added is blocked"});
    });
  
    
  });

  describe("Adds user", () => {
    let data = {};
    let testBody = {
      fUsername:'Uzumaki'
    };
  
    beforeAll(done => {
      request.put(
        "http://localhost:4000/me/user/Add",
        { json: true, body: testBody ,headers:head2 },
        (err, res, body) => {
          data.body = body;
          data.status = res.statusCode;
          done();
        
          
        }
      );
    });
    it("checks if Add unsuccessful", () => {
      expect(data.status).toBe(401);
      expect(data.body).toEqual({error : "The sending User is blocked"});
    });
  
    
  });

  
  

  describe("blocks user", () => {
    let data = {};
    let testBody = {
      blockedUser:'Uzumaki'
    };

    beforeAll(done => {
      request.put(
        "http://localhost:4000/me/user/block",
        { json: true, body: testBody ,headers:head },
        (err, res, body) => {
          data.body = body;
          data.status = res.statusCode;
          done();
        
          
        }
      );
    });
    it("checks if blocked successful", () => {
      expect(data.status).toBe(404);
      expect(data.body).toEqual({error:"you cant block yourself"});
    });

    
  });



describe("blocks user thats already blocked", () => {
  let data = {};
  let testBody = {
    blockedUser:'mostafa'
  };

  beforeAll(done => {
    request.put(
      "http://localhost:4000/me/user/block",
      { json: true, body: testBody ,headers:head },
      (err, res, body) => {
        data.body = body;
        data.status = res.statusCode;
        done();
      
        
      }
    );
  });
  it("checks if blocked successful", () => {
    expect(data.status).toBe(404);
    expect(data.body).toEqual({error : "the user you want to block is already blocked"});
  });

  
});

describe("gets info of user that blocked you", () => {
  let data = {};
  let testBody = {
    
  };

  beforeAll(done => {
    request.get(
      "http://localhost:4000/me/user/info/Uzumaki",
      { json: true, body: testBody ,headers:head2 },
      (err, res, body) => {
        data.body = body;
        data.status = res.statusCode;
        done();
      
        
      }
);
  });
  it(",checks if unblocked ", () => {
    expect(data.status).toBe(404);
    expect(data.body).toEqual({message : "User doesnt exist"});
  });

});

describe("unblocks user", () => {
  let data = {};
  let testBody = {
    unblockedUser:'mostafa'
  };

  beforeAll(done => {
    request.put(
      "http://localhost:4000/me/user/unblock",
      { json: true, body: testBody ,headers:head },
      (err, res, body) => {
        data.body = body;
        data.status = res.statusCode;
        done();
      
        
      }
    );
  });
  it("checks if unblocked ", () => {
    expect(data.status).toBe(200);
    expect(data.body).toEqual({message : "User Unblocked"});
  });

  
});



describe("unblocks user that isnt blocked", () => {
  let data = {};
  let testBody = {
    unblockedUser:'mostafa'
  };

  beforeAll(done => {
    request.put(
      "http://localhost:4000/me/user/unblock",
      { json: true, body: testBody ,headers:head },
      (err, res, body) => {
        data.body = body;
        data.status = res.statusCode;
        done();
      
        
      }
    );
  });
  it("checks if unblocked failed", () => {
    expect(data.status).toBe(404);
    expect(data.body).toEqual({error : "the user you want to unblock isnt blocked"});
  });

  
});


describe("gets info of user ", () => {
  let data = {};
  let testBody = {
    
  };

  beforeAll(done => {
    request.get(
      "http://localhost:4000/me/user/info/Uzumaki",
      { json: true, body: testBody ,headers:head2 },
      (err, res, body) => {
        data.body = body;
        data.status = res.statusCode;
        done();
      
        
      }
    );
  });
  it("checks if user sent ", () => {
    expect(data.status).toBe(200);
  });
});

  describe("gets info of user ", () => {
    let data = {};
    let testBody = {
      
    };
  
    beforeAll(done => {
      request.get(
        "http://localhost:4000/user/info/Uzumaki",
        { json: true, body: testBody},
        (err, res, body) => {
          data.body = body;
          data.status = res.statusCode;
          done();
        
          
        }
      );
    });
    it("checks if user retuned ", () => {
      expect(data.status).toBe(200);
    });

  

  });

  
describe("Adds user", () => {
  let data = {};
  let testBody = {
    fUsername:'mostafa'
  };

  beforeAll(done => {
    request.put(
      "http://localhost:4000/me/user/Add",
      { json: true, body: testBody ,headers:head },
      (err, res, body) => {
        data.body = body;
        data.status = res.statusCode;
        done();
      
        
      }
    );
  });
  it("checks if Add successful", () => {
    expect(data.status).toBe(200);
    expect(data.body).toEqual({message : "Friend request Sent"});
  });

  
});

describe("Adds user", () => {
  let data = {};
  let testBody = {
    fUsername:"Uzumaki"
  };

  beforeAll(done => {
      request.put(
        "http://localhost:4000/me/user/Add",
        { json: true, body: testBody ,headers:head },
        (err, res, body) => {
          data.body = body;
          data.status = res.statusCode;
          done();
        
          
        }
      );
    });
    it("checks if Add unsuccessful", () => {
      expect(data.status).toBe(402);
      expect(data.body).toEqual({error : "User cannot add himself"});
    });

    
  });

  describe("Adds user", () => {
    let data = {};
    let testBody = {
      fUsername:"mostafa"
    };
  
    beforeAll(done => {
        request.put(
          "http://localhost:4000/me/user/Add",
          { json: true, body: testBody ,headers:head },
          (err, res, body) => {
            data.body = body;
            data.status = res.statusCode;
            done();
          
            
          }
        );
      });
      it("checks if Add unsuccessful", () => {
        expect(data.status).toBe(401);
        expect(data.body).toEqual({error : "User has already sent a request to the other user"});
      });
  
      
    });

  


  describe("remove request", () => {
    let data = {};
    let testBody = {
      fUsername:"mostafa"
    };
  
    beforeAll(done => {
        request.put(
          "http://localhost:4000/me/user/removeReq",
          { json: true, body: testBody ,headers:head },
          (err, res, body) => {
            data.body = body;
            data.status = res.statusCode;
            done();
          
            
          }
        );
      });
      it("checks if unfriend successful", () => {
        expect(data.status).toBe(200);
        expect(data.body).toEqual({message : "Friend request Removed"});
      });
  
      
    });

    describe("Adds user", () => {
      let data = {};
      let testBody = {
        fUsername:'mostafa'
      };
    
      beforeAll(done => {
        request.put(
          "http://localhost:4000/me/user/Add",
          { json: true, body: testBody ,headers:head },
          (err, res, body) => {
            data.body = body;
            data.status = res.statusCode;
            done();
          
            
          }
        );
      });
      it("checks if Add successful", () => {
        expect(data.status).toBe(200);
        expect(data.body).toEqual({message : "Friend request Sent"});
      });
    
      
    });

    describe("reject request", () => {
      let data = {};
      let testBody = {
        fUsername:'mostafa'
      };
    
      beforeAll(done => {
        request.put(
          "http://localhost:4000/me/user/reject",
          { json: true, body: testBody ,headers:head2 },
          (err, res, body) => {
            data.body = body;
            data.status = res.statusCode;
            done();
          
            
          }
        );
      });
      it("checks if rejecting request is unsuccessful", () => {
        expect(data.status).toBe(401);
        expect(data.body).toEqual({error : "There isn't a request to be rejected"});
      });
    
      
    });
    

    describe("accept request", () => {
      let data = {};
      let testBody = {
        fUsername:'Uzumaki'
      };
    
      beforeAll(done => {
        request.put(
          "http://localhost:4000/me/user/accept",
          { json: true, body: testBody ,headers:head2 },
          (err, res, body) => {
            data.body = body;
            data.status = res.statusCode;
            done();
          
            
          }
        );
      });
      it("checks if accepting request is successful", () => {
        expect(data.status).toBe(200);
        expect(data.body).toEqual({message : "Friend request accepted"});
      });
    
      
    });

    describe("accept request", () => {
      let data = {};
      let testBody = {
        fUsername:'Uzumaki'
      };
    
      beforeAll(done => {
        request.put(
          "http://localhost:4000/me/user/accept",
          { json: true, body: testBody ,headers:head2 },
          (err, res, body) => {
            data.body = body;
            data.status = res.statusCode;
            done();
          
            
          }
        );
      });
      it("checks if Accepting request is unsuccessfull", () => {
        expect(data.status).toBe(401);
        expect(data.body).toEqual({error : "This user is already a friend"});
      });
    
      
    });

    describe("unfriend user", () => {
      let data = {};
      let testBody = {
        fUsername:'mostafa'
      };
    
      beforeAll(done => {
        request.put(
          "http://localhost:4000/me/user/Unfriend",
          { json: true, body: testBody ,headers:head },
          (err, res, body) => {
            data.body = body;
            data.status = res.statusCode;
            done();
          
            
          }
        );
      });
      it("checks if Unfriend successful", () => {
        expect(data.status).toBe(200);
        expect(data.body).toEqual({message : "Friend is removed from friends list"});
      });
    
    });

    describe("unfriend user", () => {
      let data = {};
      let testBody = {
        fUsername:'mostafa'
      };
    
      beforeAll(done => {
        request.put(
          "http://localhost:4000/me/user/Unfriend",
          { json: true, body: testBody ,headers:head },
          (err, res, body) => {
            data.body = body;
            data.status = res.statusCode;
            done();
          
            
          }
        );
      });
      it("checks if Unfriend is  unsuccessful", () => {
        expect(data.status).toBe(401);
        expect(data.body).toEqual({error : "This user is not a friend"});
      });
    
    });

    describe("accept request", () => {
      let data = {};
      let testBody = {
        fUsername:'Uzumaki'
      };
    
      beforeAll(done => {
        request.put(
          "http://localhost:4000/me/user/accept",
          { json: true, body: testBody ,headers:head2 },
          (err, res, body) => {
            data.body = body;
            data.status = res.statusCode;
            done();
          
            
          }
        );
      });
      it("checks if Accepting request is unsuccessfull", () => {
        expect(data.status).toBe(401);
        expect(data.body).toEqual({error : "There isn't a request to be accepted"});
      });
    
      
    });
    
    
});
