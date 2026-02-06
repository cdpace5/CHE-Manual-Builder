import React, { useState, useMemo } from 'react';
import { Download, Settings, ChevronDown, ChevronRight } from 'lucide-react';

const manualModules = {
  core: {
    header: `1325 N Melba Ct
Gilbert, AZ 85233
P: 480.899.3477
F: 866.470.5718
E: info@hiddenpassageway.com`,

    intro: `Thank you for installing this new secret passageway door system from Creative Home Engineering. The installation is fairly straightforward, but you should know a few things that can make it easier. **We strongly recommend that you carefully read through and understand the entire instructions before beginning the installation.**

**BEFORE MOVING FORWARD, PLEASE BE CERTAIN THAT THE ROUGH OPENING, WHICH INCLUDES SIDES AND THE HEADER, IS PERFECTLY PLUMB AND LEVEL. IF IT IS NOT, PLEASE CORRECT BEFORE PROCEEDING.**`,

    unloadingStandard: `1. UNLOADING: Use a forklift with long forks to remove the crates from the delivery truck. Alternatively, a lift gate truck can be used by swinging the end of the crate off the truck and supporting one end with the lift gate and the other end with three or four people. Then the lift gate and people should lower the crate to the ground in unison. Inspect the crate for signs of damage and contact Creative Home Engineering immediately if damaged. Locate the shock-watch and tip-n-tell indicators and confirm that they have not been activated, but do not reject the shipment based on those indicators alone. If damage is visible, be sure to keep all crate materials. Once the crate is safely on the ground, it can be dismantled from the top down, and all pieces of the secret passage can be carefully moved to the installation location.`,

    unloadingHeavy: `1. UNLOADING: ***CAUTION, THESE CRATES ARE EXTREMELY HEAVY AND EXTRA PRECAUTIONS SHOULD BE EXERCISED BEFORE MOVING*** Use a forklift with long forks to remove the crates from the delivery truck. Alternatively, a lift gate truck can be used by swinging the end of the crate off the truck and supporting one end with the lift gate and the other end with three or four people. Then the lift gate and people should lower the crate to the ground in unison. Inspect the crate for signs of damage and contact Creative Home Engineering immediately if damaged. Locate the shock-watch and tip-n-tell indicators and confirm that they have not been activated, but do not reject the shipment based on those indicators alone. If damage is visible, be sure to keep all crate materials. Once the crate is safely on the ground, it can be dismantled from the top down, and all pieces of the secret passage can be carefully moved to the installation location. When removing the door from the crate you will notice there are two lifting points on the top end for threaded eyelets if a lifting device is available. Otherwise, you will need a sturdy cart or multiple people to lift and carry the door and frame to the installation area.`,

    verifyConditions: `2. VERIFY EXISTING CONDITIONS: It is absolutely critical that the ground on which the door sits is level. If the floor is out of level, or not flat, correct it with shims and level your secret passageway, separate from the flooring, before attempting to install the secret passage. It is also critical that the studs that comprise the rough opening be plumb. Compare the existing opening to the required specifications (found on the final pages of the "Client Approval Drawing") to ensure that they match. Correct any variances before proceeding. The time taken on this step of the process will make the installation of the secret passageway much easier. The importance of correct wall conditions and level flooring cannot be overstated.`,

    installationPrep: `3. INSTALLATION PREPARATION: Confirm that there are studs around the wall opening where the secret passageway will be mounted (if the material is not wood, appropriate fasteners will need to be acquired). These studs will be used to mount your secret passageway.

*Directional instructions are given as if the person were standing outside of the secret room looking in*`,

    conclusion: `Congratulations! You're finished. Please take some quick photos of the installation and email them to info@hiddenpassageway.com. We would also greatly appreciate your feedback regarding the product and the installation process so we can continue to improve in the future. Thanks again for installing this hidden passageway system. If you have any problems during the installation process, please don't hesitate to call. We're here to serve you.

Sincerely,

Steven Humble
President
Creative Home Engineering`
  },

  doorSystems: {
    singlePivot: {
      frameInstall: `4. INSTALL THE HINGE SIDE OF THE DOOR FRAME: Fit the Frame into position inside the Rough Opening. The Frame should be shimmed **independently of the wall** during the mounting process to hold the Frame level and plumb both left-to-right and front-to-back. ***This will greatly influence how well your secret passageway operates, the recommended tolerance is limited to a 16th of an inch or less if possible*** You will need to secure the frame with the supplied 3" fasteners. At this time, you will only be securing the Hinge Side of the Frame**. *Before driving each fastener, verify that the vertical sides of the door frame are still perfectly plumb, both side-to-side and front-to-back. Otherwise, the door will be a parallelogram, causing rubbing on the bottom of the frame, and requiring touch up work. The importance of leveling your secret passageway cannot be overstated. We recommend using a laser level. A bubble level is not accurate enough due to the height of your secret passageway and will cause issues during all steps of the installation process.** After checking in all directions, secure the Hinge Side of the frame with a single fastener in the upper-most hole. Continue checking to confirm that the Door Frame is in the correct, plumb position as you secure all remaining fasteners into the holes on the Hinge Side of the frame.`,

      nonHingeSide: `5. INSTALL THE NON-HINGE SIDE OF THE FRAME: With the Hinge Side of the Door Frame fully secured, the Non-Hinge Side of the door should be much easier to secure in place. **Before drilling for each fastener, verify that the vertical sides of the door frame are still perfectly plumb, both side-to-side and front-to-back and held in place using shims** Set and check that the Non-Hinge Side of the Door Frame is plumb front-to-back before drilling and securing a fastener into the holes on the Non-Hinge Side of the Frame. Use shims to fill gaps in the wall so that the fasteners do not pull the side wall of the frame any further than what would still be plumb. Continue checking to confirm that the Frame is in the correct, plumb position as you secure all remaining fasteners on the Non-Hinge Side of the Door Frame.`,

      doorHang: `6. INSTALL THE DOOR: Use extreme caution when moving the door. It is very heavy and can easily cause injuries if extra caution is not taken. The Door is hung by two specialty hinges. In our shop we stand the door upright, then rock the door onto one of its corners and place a piece of wood underneath the raised side of the door. Then we rock the door onto the corner that now has the wood underneath it to allow us to add another piece of wood under the other corner. Now that the door is raised off the floor, take a crowbar with an elbow in it to lift and move the door with more precision and leverage.`
    },

    doublePivot: {
      frameInstall: `4. INSTALL THE HINGE SIDE OF THE DOOR FRAME: This secret passage will install almost the same as an ordinary door and door frame would. Bring the frame near the rough opening for this secret door. Before putting it into the rough opening you will need to remove the temporary threshold of this frame. This temporary threshold was in place so the frame could be transported without the risk of damaging the frame. To remove this threshold, take the screws out of the bottom. Once removed be sure to keep the vertical edges of the frame parallel so to not break any of the wood joints.

Fit the Frame into position inside the Rough Opening. The Frame should be shimmed **independently of the wall** during the mounting process to hold the Frame level and plumb both left-to-right and front-to-back. ***This will greatly influence how well your secret passageway operates, the recommended tolerance is limited to a 16th of an inch or less if possible*** You will need to secure the frame with the **Hinge Side of Frame** Screws. (There are 2 different lengths of screws. Each bag is labeled "hinge side" or "not hinge side". Be sure to use the correct screw on the correct side).

At this time, you will only be securing the Hinge Side of the Frame**. *Before driving each screw, verify that the vertical sides of the door frame are still perfectly plumb, both side-to-side and front-to-back. Otherwise, the door will be a parallelogram, causing rubbing on the bottom of the frame, and requiring touch up work. The importance of leveling your secret passageway cannot be overstated. You must use a laser level. A bubble level is not accurate enough due to the height of your secret passageway and will cause issues during all steps of the installation process.** After checking in all directions, pre-drill and secure the Hinge Side of the frame with a single screw in the upper-most hole. Continue checking to confirm that the Frame is in the correct, plumb position as you pre-drill and secure all remaining screws into the countersunk holes on the Hinge Side of the frame.`,

      nonHingeSide: `5. INSTALL THE NON-HINGE SIDE OF THE FRAME: To finish securing the Door Frame, align the Non Hinge Side of the Door Frame, use a countersunk pre-drill in the location of the side wall studs. Use the **Non Hinge side of Frame** Screws, then pre-drill and drive one screw from the Non-Hinge Side of the Door Frame into the wall stud. Make sure that the Door Frame is still plumb front-to-back. Continue checking to confirm that the Door Frame is plumb and level as you secure all remaining Frame Mounting Screws into the Non-Hinge Side of the Door Frame.

**Note:** It is absolutely critical that the distance between the two vertical sides of the frame be the same all the way down the frame. (They need to be parallel).`,

      doorHang: `6. INSTALL THE DOOR: The Wooden Door can be lifted by three people and easily hung with assistance from a fourth to set the threaded shafts into their corresponding bearings. In the pivot sets on the Door Frame there needs to be both bearings before hanging the door. The top pivot set should have a bearing already secured, while the bottom pivot set has a tapered roller bearing seat that is secured in place but will need the corresponding tapered roller bearing to be set inside.

The Door has a top and bottom shaft by which it hangs. The bottom threaded shaft has been set in shop to the correct door height with a Jam Nut. Do not loosen the bottom shaft.

To hang the door, you will need to tilt the back of the door backwards at a slight angle so that the top of the door can slip under the frame.

Have a person on either end of the door and one in the middle hold onto the shelf. The people at the end use a second hand to support the back side of the door as you move it around. Have someone guide the bottom threaded shaft into the bottom bearing. Once the bottom bearing is set in place the door can be tilted back upright. Supplied is a 1" diameter keyed shaft about 6" long. Insert this shaft through the top of the door with the key in the correct orientation so that it goes into the flange collar on top of the door. Keep pushing until the end of the keyed shaft is completely seated in the top bearing. Once seated, you can tighten the 2 screws on the flange collar on top of the door with a 3/16 allen wrench. (if you have a mini ratchet with a 3/16" allen bit that is very useful as well).

Once the top shaft is in its final position and the flange collar is tightened check that the door closes without any collisions.`,

      stopArm: `7. SECURE THE STOP ARM: Using the same 3/16" Allen Key, secure the Stop Arm in the top cavity so that the Rubber Stopper will collide with the flat face of the Stop Arm when the Door begins to open. Make sure it is high enough that it will not collide with the false top when it is put in.`
    },

    preHung: {
      frameInstall: `4. INSTALL THE HINGE SIDE OF THE DOOR FRAME: This secret passage comes pre-hung as a door system that will install almost the same as an ordinary door and door frame would. Carefully carry this door to the rough opening. Do not remove any of the cling wrap from the door as it is helping to hold the door closed. Fit the Door and Frame into position inside the Rough Opening with a person in the secret room.

The wrap can be carefully removed and the door opened. Note: the door has foam block stuffed in between the door and the frame that will prevent the door from being able to open. Remove these from the sides and the top but not from the floor yet as the foam under the door is currently supporting the weight of the door. Lift the door from the non-hinge side to the 90-degree open position and rest the door on some foam or other soft material so the door remains level.

***For safety, please keep hands on both the door and frame at this time, even if it is in a rested position***

With the door propped open at 90 degrees, you can now plumb and level the door. The door frame should be shimmed **independently of the wall** during the mounting process to hold the frame level and plumb both left-to-right and front-to-back. ***This will greatly influence how well your secret passageway operates, the recommended tolerance is limited to a 16th of an inch or less if possible.**

You will need to secure the frame with the 3" frame mounting screws. At this time, you will only be securing the Hinge Side of the Frame**. *Before driving each screw, verify that the vertical sides of the door frame are still perfectly plumb, both side-to-side and front-to-back. Otherwise, the door will be a parallelogram, causing rubbing on the bottom of the frame, and requiring touch up work. The importance of leveling your secret passageway cannot be overstated. We recommend using a laser level. A bubble level is not accurate enough due to the height of your secret passageway and will cause issues during all steps of the installation process.**

After checking in all directions, pre-drill and secure the Hinge Side of the frame with a single screw in the upper-most hole. Continue checking to confirm that the Door Frame is in the correct, plumb position as you pre-drill and secure all remaining screws into the countersunk holes on the Hinge Side of the frame.`
    },

    sliding: {
      prep: `3. INSTALLATION PREPARATION: The mechanics of this hidden door unit are mounted to the wall above the walkway into the secret room. The wall conditions should be as shown in the Client Approval Drawings. Do not proceed if the wall conditions are not as called out.

*Directional instructions are given as if the person were standing outside of the secret room looking in*`,

      mountSlider: `4. MOUNT THE SLIDING MECHANICS TO THE WALL: After confirming that the wall conditions match the dimensions found on the Client Approval Drawings, the sliding mechanics can be mounted to the wall. This unit is very heavy and can easily cause harm if caution is not taken. We recommend at least 3 people for the installation process.

The bottom most edge of the sliding mechanism needs to be mounted 94 1/8" from the top of the finished floor. It is critical that this unit is level. Using the supplied fasteners, mount this slider to the wall.`,

      threshold: `5. INSTALL THE THRESHOLD: Once the sliding mechanism is mounted, the threshold can be placed on the floor. The location for this threshold is very critical. The threshold is to live all the way against the drywall. Using a plumb bob, set both sides of the threshold 1 ¾" to the left and right of the sliding mechanism. Once the threshold is in place, it can be secured to the finished floor using appropriate fasteners in the counter sunk holes. Note: these screws will not be accessible once the door is hung so be sure that the threshold is in the correct position before moving on.`,

      hangDoor: `6. HANGING THE LEFT DOOR: Located on the bottom of the moving bookcases is a steel guide fin. This steel fin will go between the two blue wheels located on the bottom guide system that is attached to the top of the threshold. One of the moving bookcases has electromagnetic locks mounted at the top and the bottom. This bookcase is the left unit.

We will begin by hanging the left bookcase unit. To do this, stand the bookcase up vertically with the bottom of the bookcase on the floor. (Note: This bookcase is heavy and can cause harm if caution is not taken. Be mindful of the threshold when mounting the bookcase. We recommend laying ram board over the threshold before hanging this door to prevent any damage to the threshold).

Lift the bookcase up and set the bottom guide fin in between the two blue wheels. Insert the supplied carriage bolt through the top of the bookcase unit and out the corresponding holes found in the sliding mechanism. Use the provided nuts and thread it on to the carriage bolt.

The bookcase will need to be pulled away from the secret room until the front face of the bookcase is almost touching the back side of the center crown mount. Once at the desired location, the nuts will need to be fully tightened down.`,

      adjust: `7. ADJUSTING AND TUNING THE SLIDING BOOKCASE: After the left cabinet has been hung it is time to adjust it. The first adjustment we will want to make is the height of the bookcase. The bottom of the bookcase should live 3/16" off the top of the threshold. To make this adjustment, loosen the screws and carefully lower the cabinet. We recommend placing 3/16" blocks or shims under the bookcase so that you can lower the bookcase directly to the block/shims and your height will be set. Tighten the screws back up to set the height.

Once the height is set, you will drill a hole (with the provided drill bit) between the two metal pieces and insert the provided pin. This pin is to prevent the height of the bookcase from moving. A small hammer will be useful in getting the pin through the hole. *Do not slide the bookcase to the open position until you have drilled the hole and put the pin in place.*`,

      rightDoor: `8. HANG THE RIGHT DOOR: The process for hanging the right bookcase is the same as hanging the left bookcase, just mirrored. It should be adjusted and tuned in the same manner the left bookcase was.`,

      bottomGuide: `9. BOTTOM GUIDE WHEEL ADJUSTMENTS: Once both doors are hung and the top of the doors are adjusted, the bottom guide wheels can be adjusted to move the bottom of the cabinets either forward or backwards. This may be necessary in order to get both doors to close without any collision.

To make this adjustment you will need to loosen the 4 screws. While these screws are loose, you will need to either tighten or loosen the center screw to bring the bottom of the bookcase forward or backward. Once the desired location of the bookcase is achieved the other 4 screws can be tightened down to hold the location of the bookcase in place.`,

      manualOperate: `10. MANUALLY OPERATE THE DOOR: Now that the doors height has been set and the door has been adjusted so that it is living where it needs to be, push the doors to the open and closed position by hand and confirm that there is nothing dragging, scraping or colliding and that the door feels smooth both while being opened and closed.`
    }
  },

  adjustments: {
    wood: `WOOD DOOR ADJUSTMENTS: Each door that we ship has been fully installed, tuned and tested in an opening identical to the one for which it was designed. This is done to ensure that you, the client, has minimal or hopefully no adjustments to make. However, there are some adjustments that you should be aware of:

a. Warp adjustment: Adding weight to the shelves of a secret door tends to cause the top outside corner to hang forward and the bottom outside corner to hang low. This is counteracted by either adding or subtracting weight to the shelves or turning the 9/16" warp adjustment bolt located on the bottom of the door near the outside corner. Tightening this bolt lifts the door and draws in the top outside corner. We have already adjusted this bolt based on the average loaded shelf weight of 100 pounds.

b. X, Y, and Z axis pivot set positioning: The locations of the pivot sets are easily adjustable in all 3 axes; however

**You should not need to adjust as the door was precisely tuned during production.**
***If you think the top or bottom pivot location should be adjusted, notify us before attempting such an adjustment!***

Usually, the problem is that the door is not plumb, flush, or the floor is still not perfectly leveled. Occasionally, changes in humidity, temperature, or time can make minor pivot location adjustments beneficial.

***Again, if you think your door requires this kind of adjustment, notify us before attempting this procedure! You risk the door unhinging itself if performed incorrectly!***`,

    metal: `METAL DOOR ADJUSTMENTS: Each door that we ship has been fully installed, tuned and tested in an opening identical to the one for which it was designed. This is done to ensure that you, the client, has minimal or hopefully no adjustments to make. However, there are some adjustments that you should be aware of:

a. X, Y, and Z axis pivot set positioning: The locations of the pivot sets are easily adjustable in all 3 axes; however, **you should not need to adjust as the door was precisely tuned during production.** ***If you think the top or bottom pivot location should be adjusted, notify us before attempting such an adjustment!*** Usually, the problem is that the door is not plumb, flush, or the floor is still not perfectly leveled. Occasionally, changes in humidity, temperature, or time can make minor pivot location adjustments beneficial. All pivot set screws use a 5/32" allen key for adjustment. The height of the door is changed by tightening and loosening the large threaded shafts with a 3/8" allen key, you will need to loosen the Jam Nuts before being able to change the height of the door. You will either tighten the lower threaded shaft to raise the door (after loosening the top threaded shaft) or loosen the lower threaded shaft (and then tightening the top threaded shaft) to lower the door. Do not forget to tighten the Jam Nuts after making any adjustments.

***Again, if you think your door requires this kind of adjustment, notify us before attempting this procedure! You risk the door unhinging itself if performed incorrectly!***`,

    manfredFrank: `HINGE ADJUSTMENTS: Each door that we ship has been fully installed, tuned and tested in an opening identical to the one for which it was designed. This is done to ensure that you, the client, has minimal or hopefully no adjustments to make. The two specialty hinges that support your secret passageway are classified as Manfred Frank Hinges. They can be adjusted in all directions if required but it is somewhat difficult and most likely unnecessary. If it appears that adjustments need to be made, please call Creative Home Engineering so that we can walk you through the procedure to achieve your desired result. Do not adjust these hinges without calling Creative Home Engineering. Please be ready to confirm that your secret passageway frame is completely plumb in all directions for the quickest assistance as this is what causes issues with the alignment most of the time.`,

    vaultManualCycle: `MANUALLY CYCLE TEST THE DOOR: ***Do not give the door any power yet***

We are going to test and make sure the locking system is working, as well as the emergency unlock feature is functioning. To do this the door will need to stay in the open position. Locate the manual/emergency release handle on the back of the door. Remove the release pin by depressing the blue button and pulling the pin out.

The pins should move from the locked position (down) to the unlocked position (up). It should require minimal force to move the locking pins from the locked to unlocked position. Now with the pins in the unlocked position, close the door with someone on the inside until the strike plate on the back of the door touches the electromagnetic lock on the frame. Once on the inside with the door closed, manually move the locking pins back to the locked position. This should move as easily as it did when the door was open.

**DO NOT TRY AND FORCE THE PINS DOWN.**

If the pins will not go down easily the frame is most likely not plumb or level. This could be a big issue as it means the pins could be at risk of a collision with the locking tabs. Correct this issue before proceeding.

With the pins cycling from the locked to unlocked position with ease (when the door is closed), you can open the door back open, move the pins to the locked position and reinsert the release pin.`
  },

  electronics: {
    basic: `ELECTRONICS: The electronics box of this secret passageway is to be mounted on the wall inside of your secret room and close to your secret passageway.

The wiring from the box has all been labeled accordingly. In addition, there are extension wires that are extra-long to allow for flexibility in the installation location but can be shortened if necessary. All labelled wires should be connected to their corresponding connectors before the power cable is plugged in.

Your custom secret passageway will have:`,

    motorizedHoming: `DOOR POWER UP: Once the electronics box has power, the bookcase doors will need to be homed. To do this you will need to first make sure there are no obstructions blocking the door from closing all the way. With the doors in the open position and with nothing in the way. Press and hold the egress button for 10 seconds. At the end of the 10 seconds the door will start moving slowly. Let go of the button. They will close against each other. Once the doors are closed, you may press the egress button and the door will open again.`,

    ledIndicators: `After the Power Cord has been plugged in, and all the wires fully connected, your system will have power, and you should be able to see that your electromagnetic lock has a visible red LED when the door is open. Push the egress button and verify that the LED on the magnetic lock momentarily goes out.

After confirming that all methods of entry and exit are functioning properly, you may close the door. While standing inside the secret area you should be able to locate the electromagnetic lock when you close the door and see the LED turn green. If that is not the case and the LED remains red, your frame is likely still not level or not perfectly plumb.`
  }
};

const ManualConfigurator = () => {
  const [config, setConfig] = useState({
    doorSystem: 'singlePivot',
    doorMaterial: 'wood',
    hingeType: 'standardPivot',
    hasHeavyCrate: true,
    isPreHung: false,
    isVaultDoor: false,
    electronics: [],
    activationMethods: [],
    features: {
      shelves: false,
      crown: false,
      toeKick: false,
      falseTops: false,
      threshold: false,
      mirror: false,
      stationaryMirror: false,
      panel: false,
      stone: false,
      stationaryCabinets: false,
      libraryLadder: false,
      verticalScribes: false,
      backSideSkin: false,
      gasSpring: false,
      autoCloser: false
    }
  });

  const [sections, setSections] = useState({
    system: true,
    material: true,
    hinges: true,
    electronics: true,
    activation: true,
    features: true,
    special: true
  });

  const toggle = (s) => setSections(prev => ({ ...prev, [s]: !prev[s] }));
  
  const toggleFeature = (f) => setConfig(prev => ({
    ...prev,
    features: { ...prev.features, [f]: !prev.features[f] }
  }));
  
  const toggleElec = (e) => {
    const arr = config.electronics.includes(e)
      ? config.electronics.filter(x => x !== e)
      : [...config.electronics, e];
    setConfig({...config, electronics: arr});
  };

  const toggleActivation = (a) => {
    const arr = config.activationMethods.includes(a)
      ? config.activationMethods.filter(x => x !== a)
      : [...config.activationMethods, a];
    setConfig({...config, activationMethods: arr});
  };

  const manual = useMemo(() => {
    let lines = [];
    
    // Header
    lines.push(manualModules.core.header);
    lines.push('');
    
    // Introduction
    lines.push(manualModules.core.intro);
    lines.push('');
    
    // Unloading
    lines.push(config.hasHeavyCrate ? manualModules.core.unloadingHeavy : manualModules.core.unloadingStandard);
    lines.push('');
    
    // Special warnings
    if (config.features.mirror) {
      lines.push('**DO NOT LIFT THE MIRROR DOOR OUT OF THE CRATE BY GRABBING THE MIRROR. IT IS MARKED ON THE PLASTIC WRAPPING WHERE NOT TO GRAB.**');
      lines.push('');
    }
    
    // Verify conditions
    lines.push(manualModules.core.verifyConditions);
    lines.push('');
    
    // Installation prep
    if (config.doorSystem === 'sliding') {
      lines.push(manualModules.doorSystems.sliding.prep);
    } else {
      lines.push(manualModules.core.installationPrep);
    }
    lines.push('');
    
    // Door system specific installation
    if (config.doorSystem === 'singlePivot') {
      if (config.isPreHung) {
        lines.push(manualModules.doorSystems.preHung.frameInstall);
        lines.push('');
        lines.push(manualModules.doorSystems.singlePivot.nonHingeSide);
        lines.push('');
      } else {
        lines.push(manualModules.doorSystems.singlePivot.frameInstall);
        lines.push('');
        lines.push(manualModules.doorSystems.singlePivot.nonHingeSide);
        lines.push('');
        lines.push(manualModules.doorSystems.singlePivot.doorHang);
        lines.push('');
      }
    } else if (config.doorSystem === 'doublePivot') {
      lines.push(manualModules.doorSystems.doublePivot.frameInstall);
      lines.push('');
      lines.push(manualModules.doorSystems.doublePivot.nonHingeSide);
      lines.push('');
      lines.push(manualModules.doorSystems.doublePivot.doorHang);
      lines.push('');
      lines.push(manualModules.doorSystems.doublePivot.stopArm);
      lines.push('');
    } else if (config.doorSystem === 'sliding') {
      lines.push(manualModules.doorSystems.sliding.mountSlider);
      lines.push('');
      lines.push(manualModules.doorSystems.sliding.threshold);
      lines.push('');
      lines.push(manualModules.doorSystems.sliding.hangDoor);
      lines.push('');
      lines.push(manualModules.doorSystems.sliding.adjust);
      lines.push('');
      lines.push(manualModules.doorSystems.sliding.rightDoor);
      lines.push('');
      lines.push(manualModules.doorSystems.sliding.bottomGuide);
      lines.push('');
      lines.push(manualModules.doorSystems.sliding.manualOperate);
      lines.push('');
    }
    
    // Shelves and weight (for bookcase doors)
    if (config.features.shelves && config.doorSystem !== 'sliding') {
      lines.push('INSTALL THE SHELVES AND WEIGHT: These doors have been tuned to operate with a load of approximately 100 pounds. If it is operated without any load, it may not function as desired, or close at all. Any rubbing or collisions are likely due to alignment issues with the Door Frame not being perfectly level on the floor or being inaccurately plumb. Verify that the door opens and closes smoothly without rubbing. Weight is only required on the door.');
      lines.push('');
    }
    
    // Adjustments
    if (config.isVaultDoor) {
      lines.push(manualModules.adjustments.vaultManualCycle);
      lines.push('');
    }
    
    if (config.doorMaterial === 'wood') {
      lines.push(manualModules.adjustments.wood);
      lines.push('');
    } else if (config.doorMaterial === 'metal') {
      lines.push(manualModules.adjustments.metal);
      lines.push('');
    }
    
    if (config.hingeType === 'manfredFrank') {
      lines.push(manualModules.adjustments.manfredFrank);
      lines.push('');
    }
    
    // Gas spring / Auto closer
    if (config.features.gasSpring) {
      lines.push('SECURE GAS SPRING: Attach the gas spring arm to the door and frame using the supplied hardware. The gas spring will assist with opening and closing the door.');
      lines.push('');
    }
    
    if (config.features.autoCloser) {
      lines.push('ATTACH THE AUTO CLOSER: Located at the top of the door is the auto closer mechanism. Attach the arm to the door in the correct orientation. Once the arm is attached to the door, it will need to be pulled over and attached to the white plastic slide that needs to be inserted into the track that is attached to the frame.');
      lines.push('');
    }
    
    // Electronics
    if (config.electronics.length > 0 || config.activationMethods.length > 0) {
      lines.push(manualModules.electronics.basic);
      lines.push('');
      
      // Wire connections
      if (config.electronics.includes('maglock')) {
        lines.push('a. One wire labeled **MAGLOCK**: This is to be connected to the corresponding wire coming from the Frame that is also labeled **MAGLOCK**.');
        lines.push('');
      }
      if (config.electronics.includes('egress')) {
        lines.push('b. One wire labeled **EGRESS**: This is to be connected to the supplied exit button that is to be mounted on the wall at the location of your choice.');
        lines.push('');
      }
      if (config.electronics.includes('ingress')) {
        lines.push('c. One wire labeled **INGRESS**: This is to be connected to the corresponding wire coming from the Frame that is also labeled **INGRESS**.');
        lines.push('');
      }
      if (config.electronics.includes('actuator')) {
        lines.push('d. One wire labeled **ACTUATOR**: This is to be connected to the corresponding wire coming from the Frame that is also labeled **ACTUATOR**.');
        lines.push('');
      }
      if (config.electronics.includes('rfid')) {
        lines.push('e. One wire labeled **RFID**: This is to be connected to the corresponding wire coming from the Frame that is also labeled **RFID**.');
        lines.push('');
      }
      if (config.electronics.includes('3rdParty')) {
        lines.push('f. One wire labeled **3rd PARTY CONTROL**: This is to be connected to the home automation system that can control the unlocking of this door.');
        lines.push('');
      }
      if (config.electronics.includes('motorPower')) {
        lines.push('g. One wire labeled **MOTOR POWER**: This is to be connected to the four-pin opening on the Motor.');
        lines.push('');
      }
      if (config.electronics.includes('motorControl')) {
        lines.push('h. One wire labeled **MOTOR CONTROL**: This is to be connected to the six-pin opening on the Motor.');
        lines.push('');
      }
      
      lines.push('One Power Plug to be connected to the nearby electrical outlet. This secret passageway and electronics box are designed for a standard outlet.');
      lines.push('');
      
      // Motorized homing (for sliding systems)
      if (config.doorSystem === 'sliding' && config.electronics.includes('motorPower')) {
        lines.push(manualModules.electronics.motorizedHoming);
        lines.push('');
      }
      
      // LED indicators
      if (config.electronics.includes('maglock')) {
        lines.push(manualModules.electronics.ledIndicators);
        lines.push('');
      }
      
      // Activation methods
      if (config.activationMethods.length > 0) {
        lines.push('Your custom secret passageway has the following methods of operation:');
        lines.push('');
        
        if (config.activationMethods.includes('egressButton')) {
          lines.push('a. An Egress Button for activating the door from the inside. It is to be mounted in the location of your choice.');
          lines.push('');
        }
        if (config.activationMethods.includes('wirelessKeypad')) {
          lines.push('b. A Wireless Keypad for activating the door from the outside. Default code is 2 4 6 8 *. Follow the provided keypad sub-manual to set your custom 4-digit code.');
          lines.push('');
        }
        if (config.activationMethods.includes('bookTilt')) {
          lines.push('c. A Book-Tilt Switch for activating the door from the outside. The battery has been removed for shipping and must be inserted into the tilt switch for it to function. It is recommended that this always remain outside the secret room.');
          lines.push('');
        }
        if (config.activationMethods.includes('wirelessFob')) {
          lines.push('d. A Wireless Key Fob for activating the door from the outside. It is recommended that this always remain outside the secret room.');
          lines.push('');
        }
        if (config.activationMethods.includes('rfidScanner')) {
          lines.push('e. An RFID Scanner that is to be mounted in a remote location. The keycards provided are already programmed. If additional keycards are required, contact Creative Home Engineering.');
          lines.push('');
        }
      }
    }
    
    // Features - Crown
    if (config.features.crown) {
      lines.push('CROWN MOLDING: Crown must be spaced off the top of the pilasters by exactly "two credit cards" (approx 1/8") to prevent collision during swing. Attach using construction adhesive and brad nails.');
      lines.push('');
    }
    
    // Toe kick
    if (config.features.toeKick) {
      lines.push('TOE KICK: Attach the toe kick from pilaster to pilaster at the base of the door using brad nails.');
      lines.push('');
    }
    
    // False tops
    if (config.features.falseTops) {
      lines.push('FALSE TOPS: With the door functioning properly and all the trim moldings on, the false top to the frame can be installed. They are to be attached using the finish screws that use a #1 Square Bit. The false top to the frame goes in the center of the frame top.');
      lines.push('');
    }
    
    // Threshold
    if (config.features.threshold) {
      lines.push('THRESHOLD: With the door hung and functioning the threshold can be placed under the door. The threshold should be leveled under the door and should have a ¼" gap from the bottom of the door to the top of the threshold.');
      lines.push('');
    }
    
    // Stationary cabinets
    if (config.features.stationaryCabinets) {
      lines.push('INSTALL THE STATIONARY CABINET: The stationary cabinet will live next to the hidden door and will be mounted to the wall. It should be raised or lowered to match the height of the secret door. Using the supplied 1 ¼" flat head screws, attach the stationary cabinets to the door frame and to the wall studs. The 3" screws can be used to attach to the studs behind shelves.');
      lines.push('');
    }
    
    // Library ladder
    if (config.features.libraryLadder) {
      lines.push('MOUNT LIBRARY LADDER: Supplied in the crate is a Library Ladder. Using the manufacturer\'s instruction, mount the rail system to the intermediate crown.');
      lines.push('');
    }
    
    // Vertical scribes
    if (config.features.verticalScribes) {
      lines.push('ATTACH VERTICAL SCRIBES: Vertical scribes span from molding to molding and are attached with a headless nailer. The moving scribe molding attached to the doors should have a slight gap between them and the top molding.');
      lines.push('');
    }
    
    // Back side skin
    if (config.features.backSideSkin) {
      lines.push('APPLYING A SKIN TO THE BACK OF THE DOOR: Per the client approval drawing a skin can be applied to the back of the door. When applying you can use fasteners or construction adhesive but be sure that the fasteners are of an appropriate length as to not protrude out of the face of the door.');
      lines.push('');
    }
    
    // Face types - Mirror (at end)
    if (config.features.mirror) {
      lines.push('ATTACH THE MIRROR: The mirror to this hidden door unit attaches quite simply. On the back of the mirror are two vertical metal stripes with slotted holes. These slotted holes correspond with 6 special screw heads that are coming from the vertical rails mounted on the side of the door. Position the back of the mirror in front of the door and align the screw head with the slotted holes. Once the screw heads are in the slotted hole the mirror face frame can be pulled down.');
      lines.push('');
    }
    
    if (config.features.stationaryMirror) {
      lines.push('STATIONARY MIRROR: If provided, use the French Cleat for wall mounting. Do not use hardware longer than 5/8" to avoid breaking glass.');
      lines.push('');
    }
    
    // Panel/Wainscoting
    if (config.features.panel) {
      lines.push('PANEL & WAINSCOTING INSTALLATION: Align panels to maintain a consistent 3/16" gap between the floor and ceiling. Stationary Panels: If mounting to the wall, allow for a 1/16" (two credit cards) gap between stationary and moving panels.');
      lines.push('');
    }
    
    // Stone/Brick
    if (config.features.stone) {
      lines.push('ATTACHING THE STONE TO THE DOOR: Once the door is opening and closing the stones can be applied using a construction adhesive. The stones are applied to the face of the MDF that is attached to the door. These stones should live between the metal structure of the door. The applied stones should be individually floated off the face of the door so that they almost touch the backside of the existing stones.');
      lines.push('');
    }
    
    // Conclusion
    lines.push(manualModules.core.conclusion);
    
    return lines.join('\n');
  }, [config]);

  const downloadWord = async () => {
    const getBase64Image = async (url) => {
      try {
        const response = await fetch(url);
        const blob = await response.blob();
        return new Promise((resolve) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result);
          reader.readAsDataURL(blob);
        });
      } catch (e) { return ""; }
    };

    const logoBase64 = await getBase64Image('./stamp.jpeg');

    const html = `
<html xmlns:o='urn:schemas-microsoft-com:office:office' 
      xmlns:w='urn:schemas-microsoft-com:office:word' 
      xmlns:v='urn:schemas-microsoft-com:vml' 
      xmlns='http://www.w3.org/TR/REC-html40'>
<head>
  <style>
    @page Section1 {
      size: 8.5in 11.0in; 
      margin: 1.0in 0.75in 1.0in 0.75in;
      mso-header-margin: 0.5in; 
      mso-footer-margin: 0.5in; 
      mso-footer: f1; 
    }
    div.Section1 { page: Section1; }
    
    body { font-family: "Times New Roman", Times, serif; }
    .helvetica-light { font-family: "Helvetica-Light", Helvetica, Arial, sans-serif; font-weight: 300; font-size: 10pt; }
    p { margin: 0; line-height: 1.3; font-size: 11pt; text-align: justify; }
    
    .title-box {
      background-color: #000000;
      color: #ffffff;
      text-align: center;
      text-transform: uppercase;
      font-family: "Helvetica-Light", Helvetica, Arial, sans-serif;
      font-size: 14pt;
      font-weight: bold;
      padding: 10pt 0;
      margin: 15pt 0;
    }

    .footer-text { 
      font-size: 9pt; 
      text-align: center; 
      border-top: 1px solid #000; 
      padding-top: 5px; 
      font-family: "Times New Roman", serif; 
    }

    table#hrdftrtbl { display:none; mso-hide:all; }
  </style>
</head>
<body>
  <div class="Section1">
    <table width="100%" style="margin-bottom: 20px;">
      <tr>
        <td width="55%" valign="top">
          ${logoBase64 ? `<img src="${logoBase64}" width="384" style="width:4.0in; height:auto; display:block;" />` : ''}
        </td>
        <td width="45%" class="helvetica-light" valign="top" align="right">
          <p style="text-align: right;">1325 N Melba Ct</p>
          <p style="text-align: right;">Gilbert, AZ 85233</p>
          <p style="text-align: right;">P: 480.899.3477</p>
          <p style="text-align: right;">F: 866.470.5718</p>
          <p style="text-align: right;">E: info@hiddenpassageway.com</p>
        </td>
      </tr>
    </table>

    <div class="title-box">
      INSTALLATION INSTRUCTIONS
    </div>

    ${manual.split('\n').map(l => {
      const t = l.trim();
      if (!t) return '';
      if (t.startsWith('1325') || t.startsWith('Gilbert') || t.startsWith('P:') || t.startsWith('F:') || t.startsWith('E:')) return '';
      if (t.toUpperCase() === 'INSTALLATION INSTRUCTIONS') return '';

      const formatMarkdown = (text) => {
        let formatted = text
          .replace(/\*\*\*(.*?)\*\*\*/g, '<strong><em>$1</em></strong>')
          .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
          .replace(/\*(.*?)\*/g, '<em>$1</em>');
        if (formatted.includes("BEFORE MOVING FORWARD")) {
          return `<span style="color: #FF0000;">${formatted}</span>`;
        }
        return formatted;
      };

      if (/^\d+\./.test(t) || t.includes(': ')) {
          const colonIndex = t.indexOf(':');
          if (colonIndex !== -1) {
              const header = t.substring(0, colonIndex + 1);
              const content = t.substring(colonIndex + 1);
              return `<p style="margin-bottom:10pt;"><strong>${header}</strong>${formatMarkdown(content)}</p>`;
          }
      }
      return `<p style="margin-bottom:10pt;">${formatMarkdown(t)}</p>`;
    }).join('')}

    <table id="hrdftrtbl" border="0" cellspacing="0" cellpadding="0">
      <tr>
        <td>
          <div style='mso-element:footer' id="f1">
            <p class="footer-text">
              1325 N Melba Ct Gilbert AZ 85233 - 480-899-3477 - info@hiddenpassageway.com
            </p>
          </div>
        </td>
      </tr>
    </table>
  </div>
</body>
</html>`;

    const blob = new Blob(['\ufeff', html], { type: 'application/msword' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Installation-Manual.doc';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex h-screen bg-slate-50">
      <div className="w-96 bg-slate-900 text-white overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center gap-3 mb-6">
            <Settings className="w-8 h-8 text-blue-400" />
            <div>
              <h1 className="text-xl font-bold">Manual Builder</h1>
              <p className="text-sm text-slate-400">Creative Home Engineering</p>
            </div>
          </div>

          {/* Door System */}
          <div className="mb-4">
            <button onClick={() => toggle('system')} className="w-full flex items-center justify-between p-3 bg-slate-800 rounded mb-2">
              <span className="font-semibold">Door System</span>
              {sections.system ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
            </button>
            {sections.system && (
              <div className="ml-4 space-y-2">
                <label className="flex items-center gap-2 p-2 hover:bg-slate-800 rounded cursor-pointer">
                  <input type="radio" checked={config.doorSystem === 'singlePivot'} onChange={() => setConfig({...config, doorSystem: 'singlePivot'})} />
                  <span className="text-sm">Single Pivot Door</span>
                </label>
                <label className="flex items-center gap-2 p-2 hover:bg-slate-800 rounded cursor-pointer">
                  <input type="radio" checked={config.doorSystem === 'doublePivot'} onChange={() => setConfig({...config, doorSystem: 'doublePivot'})} />
                  <span className="text-sm">Double Pivot Door</span>
                </label>
                <label className="flex items-center gap-2 p-2 hover:bg-slate-800 rounded cursor-pointer">
                  <input type="radio" checked={config.doorSystem === 'sliding'} onChange={() => setConfig({...config, doorSystem: 'sliding'})} />
                  <span className="text-sm">Sliding System</span>
                </label>
                <label className="flex items-center gap-2 p-2 hover:bg-slate-800 rounded cursor-pointer ml-4">
                  <input type="checkbox" checked={config.isPreHung} onChange={(e) => setConfig({...config, isPreHung: e.target.checked})} disabled={config.doorSystem === 'sliding'} />
                  <span className="text-sm">Pre-Hung</span>
                </label>
              </div>
            )}
          </div>

          {/* Door Material */}
          <div className="mb-4">
            <button onClick={() => toggle('material')} className="w-full flex items-center justify-between p-3 bg-slate-800 rounded mb-2">
              <span className="font-semibold">Door Material</span>
              {sections.material ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
            </button>
            {sections.material && (
              <div className="ml-4 space-y-2">
                <label className="flex items-center gap-2 p-2 hover:bg-slate-800 rounded cursor-pointer">
                  <input type="radio" checked={config.doorMaterial === 'wood'} onChange={() => setConfig({...config, doorMaterial: 'wood'})} />
                  <span className="text-sm">Wood Door</span>
                </label>
                <label className="flex items-center gap-2 p-2 hover:bg-slate-800 rounded cursor-pointer">
                  <input type="radio" checked={config.doorMaterial === 'metal'} onChange={() => setConfig({...config, doorMaterial: 'metal'})} />
                  <span className="text-sm">Metal Door</span>
                </label>
              </div>
            )}
          </div>

          {/* Hinge Type */}
          <div className="mb-4">
            <button onClick={() => toggle('hinges')} className="w-full flex items-center justify-between p-3 bg-slate-800 rounded mb-2">
              <span className="font-semibold">Hinge Type</span>
              {sections.hinges ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
            </button>
            {sections.hinges && (
              <div className="ml-4 space-y-2">
                <label className="flex items-center gap-2 p-2 hover:bg-slate-800 rounded cursor-pointer">
                  <input type="radio" checked={config.hingeType === 'standardPivot'} onChange={() => setConfig({...config, hingeType: 'standardPivot'})} />
                  <span className="text-sm">Standard Pivot</span>
                </label>
                <label className="flex items-center gap-2 p-2 hover:bg-slate-800 rounded cursor-pointer">
                  <input type="radio" checked={config.hingeType === 'manfredFrank'} onChange={() => setConfig({...config, hingeType: 'manfredFrank'})} />
                  <span className="text-sm">Manfred Frank Hinges</span>
                </label>
              </div>
            )}
          </div>

          {/* Electronics */}
          <div className="mb-4">
            <button onClick={() => toggle('electronics')} className="w-full flex items-center justify-between p-3 bg-slate-800 rounded mb-2">
              <span className="font-semibold">Electronics</span>
              {sections.electronics ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
            </button>
            {sections.electronics && (
              <div className="ml-4 space-y-2">
                <label className="flex items-center gap-2 p-2 hover:bg-slate-800 rounded cursor-pointer">
                  <input type="checkbox" checked={config.electronics.includes('maglock')} onChange={() => toggleElec('maglock')} />
                  <span className="text-sm">Maglock</span>
                </label>
                <label className="flex items-center gap-2 p-2 hover:bg-slate-800 rounded cursor-pointer">
                  <input type="checkbox" checked={config.electronics.includes('egress')} onChange={() => toggleElec('egress')} />
                  <span className="text-sm">Egress Button</span>
                </label>
                <label className="flex items-center gap-2 p-2 hover:bg-slate-800 rounded cursor-pointer">
                  <input type="checkbox" checked={config.electronics.includes('ingress')} onChange={() => toggleElec('ingress')} />
                  <span className="text-sm">Ingress Control</span>
                </label>
                <label className="flex items-center gap-2 p-2 hover:bg-slate-800 rounded cursor-pointer">
                  <input type="checkbox" checked={config.electronics.includes('actuator')} onChange={() => toggleElec('actuator')} />
                  <span className="text-sm">Actuator</span>
                </label>
                <label className="flex items-center gap-2 p-2 hover:bg-slate-800 rounded cursor-pointer">
                  <input type="checkbox" checked={config.electronics.includes('rfid')} onChange={() => toggleElec('rfid')} />
                  <span className="text-sm">RFID</span>
                </label>
                <label className="flex items-center gap-2 p-2 hover:bg-slate-800 rounded cursor-pointer">
                  <input type="checkbox" checked={config.electronics.includes('3rdParty')} onChange={() => toggleElec('3rdParty')} />
                  <span className="text-sm">3rd Party Control</span>
                </label>
                <label className="flex items-center gap-2 p-2 hover:bg-slate-800 rounded cursor-pointer">
                  <input type="checkbox" checked={config.electronics.includes('motorPower')} onChange={() => toggleElec('motorPower')} />
                  <span className="text-sm">Motor Power</span>
                </label>
                <label className="flex items-center gap-2 p-2 hover:bg-slate-800 rounded cursor-pointer">
                  <input type="checkbox" checked={config.electronics.includes('motorControl')} onChange={() => toggleElec('motorControl')} />
                  <span className="text-sm">Motor Control</span>
                </label>
              </div>
            )}
          </div>

          {/* Activation Methods */}
          <div className="mb-4">
            <button onClick={() => toggle('activation')} className="w-full flex items-center justify-between p-3 bg-slate-800 rounded mb-2">
              <span className="font-semibold">Activation Methods</span>
              {sections.activation ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
            </button>
            {sections.activation && (
              <div className="ml-4 space-y-2">
                <label className="flex items-center gap-2 p-2 hover:bg-slate-800 rounded cursor-pointer">
                  <input type="checkbox" checked={config.activationMethods.includes('egressButton')} onChange={() => toggleActivation('egressButton')} />
                  <span className="text-sm">Egress Button</span>
                </label>
                <label className="flex items-center gap-2 p-2 hover:bg-slate-800 rounded cursor-pointer">
                  <input type="checkbox" checked={config.activationMethods.includes('wirelessKeypad')} onChange={() => toggleActivation('wirelessKeypad')} />
                  <span className="text-sm">Wireless Keypad</span>
                </label>
                <label className="flex items-center gap-2 p-2 hover:bg-slate-800 rounded cursor-pointer">
                  <input type="checkbox" checked={config.activationMethods.includes('bookTilt')} onChange={() => toggleActivation('bookTilt')} />
                  <span className="text-sm">Book-Tilt Switch</span>
                </label>
                <label className="flex items-center gap-2 p-2 hover:bg-slate-800 rounded cursor-pointer">
                  <input type="checkbox" checked={config.activationMethods.includes('wirelessFob')} onChange={() => toggleActivation('wirelessFob')} />
                  <span className="text-sm">Wireless Key Fob</span>
                </label>
                <label className="flex items-center gap-2 p-2 hover:bg-slate-800 rounded cursor-pointer">
                  <input type="checkbox" checked={config.activationMethods.includes('rfidScanner')} onChange={() => toggleActivation('rfidScanner')} />
                  <span className="text-sm">RFID Scanner</span>
                </label>
              </div>
            )}
          </div>

          {/* Features */}
          <div className="mb-4">
            <button onClick={() => toggle('features')} className="w-full flex items-center justify-between p-3 bg-slate-800 rounded mb-2">
              <span className="font-semibold">Features</span>
              {sections.features ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
            </button>
            {sections.features && (
              <div className="ml-4 space-y-2">
                <label className="flex items-center gap-2 p-2 hover:bg-slate-800 rounded cursor-pointer">
                  <input type="checkbox" checked={config.features.shelves} onChange={() => toggleFeature('shelves')} />
                  <span className="text-sm">Shelves & Weight</span>
                </label>
                <label className="flex items-center gap-2 p-2 hover:bg-slate-800 rounded cursor-pointer">
                  <input type="checkbox" checked={config.features.crown} onChange={() => toggleFeature('crown')} />
                  <span className="text-sm">Crown Molding</span>
                </label>
                <label className="flex items-center gap-2 p-2 hover:bg-slate-800 rounded cursor-pointer">
                  <input type="checkbox" checked={config.features.toeKick} onChange={() => toggleFeature('toeKick')} />
                  <span className="text-sm">Toe Kick</span>
                </label>
                <label className="flex items-center gap-2 p-2 hover:bg-slate-800 rounded cursor-pointer">
                  <input type="checkbox" checked={config.features.falseTops} onChange={() => toggleFeature('falseTops')} />
                  <span className="text-sm">False Tops</span>
                </label>
                <label className="flex items-center gap-2 p-2 hover:bg-slate-800 rounded cursor-pointer">
                  <input type="checkbox" checked={config.features.threshold} onChange={() => toggleFeature('threshold')} />
                  <span className="text-sm">Threshold</span>
                </label>
                <label className="flex items-center gap-2 p-2 hover:bg-slate-800 rounded cursor-pointer">
                  <input type="checkbox" checked={config.features.mirror} onChange={() => toggleFeature('mirror')} />
                  <span className="text-sm">Mirror Face</span>
                </label>
                <label className="flex items-center gap-2 p-2 hover:bg-slate-800 rounded cursor-pointer">
                  <input type="checkbox" checked={config.features.stationaryMirror} onChange={() => toggleFeature('stationaryMirror')} />
                  <span className="text-sm">Stationary Mirror</span>
                </label>
                <label className="flex items-center gap-2 p-2 hover:bg-slate-800 rounded cursor-pointer">
                  <input type="checkbox" checked={config.features.panel} onChange={() => toggleFeature('panel')} />
                  <span className="text-sm">Panel/Wainscoting</span>
                </label>
                <label className="flex items-center gap-2 p-2 hover:bg-slate-800 rounded cursor-pointer">
                  <input type="checkbox" checked={config.features.stone} onChange={() => toggleFeature('stone')} />
                  <span className="text-sm">Stone/Brick Face</span>
                </label>
                <label className="flex items-center gap-2 p-2 hover:bg-slate-800 rounded cursor-pointer">
                  <input type="checkbox" checked={config.features.stationaryCabinets} onChange={() => toggleFeature('stationaryCabinets')} />
                  <span className="text-sm">Stationary Cabinets</span>
                </label>
                <label className="flex items-center gap-2 p-2 hover:bg-slate-800 rounded cursor-pointer">
                  <input type="checkbox" checked={config.features.libraryLadder} onChange={() => toggleFeature('libraryLadder')} />
                  <span className="text-sm">Library Ladder</span>
                </label>
                <label className="flex items-center gap-2 p-2 hover:bg-slate-800 rounded cursor-pointer">
                  <input type="checkbox" checked={config.features.verticalScribes} onChange={() => toggleFeature('verticalScribes')} />
                  <span className="text-sm">Vertical Scribes</span>
                </label>
                <label className="flex items-center gap-2 p-2 hover:bg-slate-800 rounded cursor-pointer">
                  <input type="checkbox" checked={config.features.backSideSkin} onChange={() => toggleFeature('backSideSkin')} />
                  <span className="text-sm">Back-Side Skin</span>
                </label>
                <label className="flex items-center gap-2 p-2 hover:bg-slate-800 rounded cursor-pointer">
                  <input type="checkbox" checked={config.features.gasSpring} onChange={() => toggleFeature('gasSpring')} />
                  <span className="text-sm">Gas Spring</span>
                </label>
                <label className="flex items-center gap-2 p-2 hover:bg-slate-800 rounded cursor-pointer">
                  <input type="checkbox" checked={config.features.autoCloser} onChange={() => toggleFeature('autoCloser')} />
                  <span className="text-sm">Auto Closer</span>
                </label>
              </div>
            )}
          </div>

          {/* Special Options */}
          <div className="mb-4">
            <button onClick={() => toggle('special')} className="w-full flex items-center justify-between p-3 bg-slate-800 rounded mb-2">
              <span className="font-semibold">Special Options</span>
              {sections.special ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
            </button>
            {sections.special && (
              <div className="ml-4 space-y-2">
                <label className="flex items-center gap-2 p-2 hover:bg-slate-800 rounded cursor-pointer">
                  <input type="checkbox" checked={config.hasHeavyCrate} onChange={(e) => setConfig({...config, hasHeavyCrate: e.target.checked})} />
                  <span className="text-sm">Heavy Crate Warning</span>
                </label>
                <label className="flex items-center gap-2 p-2 hover:bg-slate-800 rounded cursor-pointer">
                  <input type="checkbox" checked={config.isVaultDoor} onChange={(e) => setConfig({...config, isVaultDoor: e.target.checked})} />
                  <span className="text-sm">Vault Door (Manual Cycle Test)</span>
                </label>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col">
        <div className="bg-white border-b p-4 flex justify-between items-center">
          <div>
            <h2 className="text-lg font-semibold">Installation Manual</h2>
            <p className="text-sm text-slate-500">Live preview</p>
          </div>
          <button onClick={downloadWord} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 flex items-center gap-2">
            <Download className="w-4 h-4" />
            Download Word
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto p-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <pre className="whitespace-pre-wrap font-sans text-sm leading-relaxed">{manual}</pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManualConfigurator;
