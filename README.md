Pretty file upload button multiselect
==============================

Bootstrap 3 pretty file upload


  <div class="form-group">
        <label class="control-label col-lg-3">Pliki</label>
        <div class="col-lg-9">
            <div class="prettyFile input-group">
                <input type="file" name="form[files][]" multiple="multiple">
                <div class="input-append input-group"">
                    <span class="input-group-btn">
                        <button class="btn btn-default" type="button">Go!</button>
                    </span>
                    <input class="input-large form-control" type="text">
                </div>
            </div>
        </div>
    </div>