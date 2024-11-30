export function BoneTrader() {
  return (
    <div id="boneWrapper" style={{ display: "none" }}>
      <div id="boneWrapper0">
        <div >
          <div className="col-xs-2"></div>
          <div className="col-xs-8">
            <div id="boneTitleContainer">Bone Trader</div>
            <div id="boneOwnedContainer">
              You have <span id="bonesOwned">0</span>
            </div>
            <span id="bonesFrom">
              You can earn bones as you progress through the world by killing
              Skeletimps and Megaskeletimps.
            </span>
            <br />
            <div id="boneFlavorRow">
              The Bone Trader trades bones for... bonuses
            </div>
          </div>

          <div className="col-xs-2">
            <div className="boneBtn dangerColor pointer noselect">Close</div>
          </div>
        </div>
        <div id="boneBuyRow" className="row">
          <div className="col-xs-4 boneBuyColumn">
            <div className="boneBuyTitle">Permanent Upgrades</div>
            <div className="boneBuyDesc" id="permaBonesDesc"></div>
            <div id="permaBoneBonuses"></div>
          </div>

          <div id="boneImportsColumn" className="col-xs-4 boneBuyColumn">
            <div className="boneBuyTitle">Exotic Imp-orts</div>
            <div className="boostSpacerImports boostSpacer">
              <div className="boneBuyDesc">
                Exotic Imp-orts will be unlocked permanently once purchased.
                Each has a <span id="exoticImpSpawnChance"></span>% chance to
                spawn per cell and better loot than normal enemies. Any stacking
                multipliers from killing Imp-orts reset on Portal but the imps
                do not have to be unlocked again.
              </div>

              <div className="importsPreview">
                <div className="importLocation">Spawns in World</div>
                <table
                  className="table importsTable"
                  id="importsTableWorld0"
                ></table>
                <div className="importLocation table-hover">Spawns in Maps</div>
                <table
                  className="table importsTable"
                  id="importsTableMaps0"
                ></table>
              </div>

              <div id="purchaseContainerImports">
                <div
                  className="boneBtn boneBtnStateOn pointer noselect"
                  id="importPurchaseBtn"
                ></div>
              </div>
            </div>
          </div>

          <div id="boneMiscColumn" className="col-xs-4 boneBuyColumn">
            <div className="boneBuyTitle">Other Goodies</div>
            <div className="boostSpacer">
              <div id="buyHeliumArea">
                <div
                  className="boneBtn boneBtnStateOn pointer noselect"
                  id="heliumPurchaseBtn"
                >
                  Buy Bone Portal (100 bones)
                </div>
                <div className="miscDesc">
                  <b>
                    <span id="heliumGainedMisc"></span>
                  </b>
                  <br />
                  <span id="bonePortalDescription">
                    Automatically gain helium equal to the amount you earned on
                    your best run
                  </span>
                </div>
              </div>

              <div id="singleRunBonuses"></div>
              <div id="buyHeirloomArea">
                <div
                  className="boneBtn boneBtnStateOn pointer noselect"
                  id="heirloomPurchaseBtn"
                >
                  Buy Heirloom (30 bones)
                </div>

                <div className="miscDesc">
                  <div id="heirloomRarityMisc"></div>
                  Get&nbsp;one&nbsp;Heirloom&nbsp;at&nbsp;the&nbsp;chances&nbsp;above,&nbsp;based&nbsp;on&nbsp;highest&nbsp;zone
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
