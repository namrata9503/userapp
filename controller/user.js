const User = require('../model/user');


exports.postNewUser = (req, res) => {
    let {
        name,
        username,
        email,
        password,
        createdDate

    } = req.body;

    var user = new User({
        name,
        username,
        email,
        password,
        createdDate
    });
    user.save().then((user) => {
        console.log('Added successfully');
        res.json(user);
    })
};

exports.getAll = (req, res) => {
    User.find({}, (error, users) => {
      if (error) {
        res.json({
          message: "Server error, Please try after some time.",
          status: 500
        });
      }
      if (users) {
        res.json({
          data: users,
          message: "All users fetched",
          status: 200
        });
      } else {
        res.json({
          message: "No data found",
          status: 200
        });
      }
    });
  };

  exports.getUserById = (req, res) => {
    User.findById(req.params.id, (err, users) => {
      if (err) {
        res.json({
          message: "Server error, Please try after some time.",
          status: 500
        });
      }
      if (users) {
        res.json({
          data: users,
          message: "User data fetched successfully",
          status: 200
        });
      } else {
        res.json({
          message: "No data found",
          status: 200
        });
      }
    });
  };

  exports.getUserOne = (req, res) => {
    //var incomingData = req.params.user;

    User.findOne({name : req.body.name}, (err, users) => {
        console.log(req.body.name)
      if (err) {
        res.json({
          message: "Server error, Please try after some time....",
          status: 500
        });
      }
      if (users) {
        res.json({
          data: users,
          message: "User data fetched successfully",
          status: 200
        });
      } else {
        res.json({
          message: "No data found",
          status: 200
        });
      }
    });
  };

  exports.updateUserById = (req, res) => {
    console.log(req.body);
    const {
      name,
      email,
      username
    } = req.body;
   
    User.findByIdAndUpdate(
       req.params.id,
     {$set: { email: req.body.email }}, (error, user) => {
      if (error)
        res.json({
          error: error,
          status: 500
        });
      console.log(error);
      res.json(user);
    });
  };

  exports.findOneUpdate = (req, res) => {
    console.log(req.body);
    const {
      name,
      email,
      username
    } = req.body;
   
    User.findOneAndUpdate(
       
     {name: 'sidd'}, {$set:{username:'siddh'}}, {new: true}, (error, user) => {
      if (error)
        res.json({
          error: error,
          status: 500
        });
      console.log(error);
      res.json(user);
    });
  };

  exports.updateMultiple = (req, res) => {
    console.log(req.body);
    var query= {name: "nams"};

var valueUpdate = {$set: {username: "siddhu"}};
    const {
      name,
      email,
      username
    } = req.body;
   
    User.updateMany(query,valueUpdate, (error, user) => {
      if (error)
        res.json({
          error: error,
          status: 500
        });
      console.log(error);
      res.json(user);
    });
  };

  exports.updateOne = (req, res) => {
    console.log(req.body);
    var query= {email: "ginger"};

var valueUpdate = {$set: {password: "555"}};
    const {
      name,
      email,
      username
    } = req.body;
   
    User.updateOne(query,valueUpdate, (error, user) => {
      if (error)
        res.json({
          error: error,
          status: 500
        });
      console.log(error);
      res.json(user);
    });
  };
  

//   exports.replaceOne = (req, res) => {
//     console.log(req.body);
//     var query= {email: "ginger"};

// var valueUpdate = {$set: {name: "namuu"}};
//     const {
//       name,
//       email,
//       username
//     } = req.body;
   
//     User.replaceOne({name:req.body.name}, (error, user) => {
//       if (error)
//         res.json({
//           error: error,
//           status: 500
//         });
//       console.log(error);
//       res.json(user);
//     });
//   };
exports.deleteUserById = (req, res) => {
    User.findOneAndDelete({
      _id: req.params.id
    }, (error, deleteId) => {
      if (error)
        res.json({
          error: error,
          status: 500
        });
      res.json({
        message: "Deleted successfully"
      });
    });
  };

  exports.deleteMany = (req, res) => {
    User.deleteMany({name:"nams"
    }, (error, deleteId) => {
      if (error)
        res.json({
          error: error,
          status: 500
        });
      res.json({
        message: "Deleted successfully"
      });
    });
  };

  exports.deleteOne = (req, res) => {
    User.deleteOne({name:"geeta"
    }, (error, deleteId) => {
      if (error)
        res.json({
          error: error,
          status: 500
        });
      res.json({
        message: "Deleted successfully"
      });
    });
  };

  exports.deleteFindById = (req, res) => {
    User.findByIdAndDelete({
      _id: req.params.id
    }, (error, deleteId) => {
      if (error)
        res.json({
          error: error,
          status: 500
        });
      res.json({
        message: "Deleted successfully"
      });
    });
  };

  exports.removeFindById = (req, res) => {
    User.findByIdAndRemove({
      _id: req.params.id
    }, (error, deleteId) => {
      if (error)
        res.json({
          error: error,
          status: 500
        });
      res.json({
        message: "removed successfully"
      });
    });
  };
  exports.removeFind = (req, res) => {
    User.findOneAndRemove({
      _id: req.params.id
    }, (error, deleteId) => {
      if (error)
        res.json({
          error: error,
          status: 500
        });
      res.json({
        message: "removed successfully"
      });
    });
  };
  