var rgbhex = "";
var msg = "";
const hexref = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "a", "b", "c", "d", "e", "f"];

Events.on(EventType.ClientLoadEvent, cons(load => {
    Vars.ui.hudGroup.fill(cons(table => {
        table.button(Icon.admin, Styles.cleari, run(() => {

            getvar();
            
        })).width(50).height(50).name("variable button");

        table.top().marginLeft(950);
    }
}

Events.on(EventType.ClientLoadEvent, cons(load => {
    Vars.ui.hudGroup.fill(cons(table => {
        table.button(Icon.admin, Styles.cleari, run(() => {
        
        generate_and_send();
        
        })).width(50).height(50).name("admin button");
        
        table.top().marginLeft(900);
    }));
}));

function getvar() {
    const inputDialog = new BaseDialog("Enter Your String");
    let myCustomString = "";
    inputDialog.cont.add("Please type your text below:").row();
    const field = inputDialog.cont.field("", text => {
    }).get(); 

    inputDialog.buttons.button("Confirm", () => {
        myCustomString = field.getText();
    
        Vars.ui.hudfrag.showToast("Saved string: " + myCustomString);
    
        inputDialog.hide();
    }).size(160, 50);

    inputDialog.buttons.button("Cancel", () => {
        inputDialog.hide();
    }).size(160, 50);

    inputDialog.show();
}

function generate_and_send() {
    msg = "";
    for(let i=0; i<1; i++) {
       rgbhex = "[#";
       for(let k=0; k<6; k++) {
          rgbhex+=hexref[Mathf.floor(Mathf.random() * 16)];
       };
    let rand = Mathf.ceil(Mathf.random()*1000);
    msg+=rgbhex + "]" + ((rand == 1) ? "<@1186833004899876874> GMug id be scared of beacon if i was you ngl": msgvar);
    };
    Call.sendChatMessage(msg);
};
