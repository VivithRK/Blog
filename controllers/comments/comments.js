const createCtrl = async (req, res) => {
  try {
    res.json({
      status: "Success",
      user: "Comment Updated",
    });
  } catch (err) {
    res.json(err);
  }
};

const deleteCtrl = async (req, res) => {
  try {
    res.json({
      status: "Success",
      user: "Comment deleted",
    });
  } catch (err) {
    res.json(err);
  }
};
const singleCtrl = async (req, res) => {
  try {
    res.json({
      status: "Success",
      user: "SIngle Comment",
    });
  } catch (err) {
    res.json(err);
  }
};
const updateCtrl = async (req, res) => {
  try {
    res.json({
      status: "Success",
      user: "updated created",
    });
  } catch (err) {
    res.json(err);
  }
};

module.exports = { updateCtrl, singleCtrl, deleteCtrl, createCtrl };
