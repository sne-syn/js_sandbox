var PenguinController = function PenguinController(penguinView, penguinModel) {
    this.penguinView = penguinView;
    this.penguinModel = penguinModel;

    PenguinController.prototype.onClickGetPenguin = function onClickGetPenguin(evt) {
        var currentTarget = evt.target;
        var index = parseInt(target.dataset.penguinIndex, 10);
    };
};