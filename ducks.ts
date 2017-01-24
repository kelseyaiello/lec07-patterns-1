/**
 * A class that represents a Duck.
 * Intended to be extended to specific species. <-- design details
 */

export abstract class Duck {

  /**
   * Has the duck make a sound
   */
  quack() {
    console.log("quack!");
  }

/**
 * Has a duck swim.
 * @param distance how far to swim
 */
  swim(distance:number) {
    console.log("Swims the "+distance+"m duckstyle.") //prints a message about swimming
  }

/**
 * Gets the duck's description
 * @returns A description of the duck
 * 
 * If overridding a method in a significant way, you should comment about it
 */
  abstract display():string;
}


export class RedheadDuck extends Duck {
  display() {
    return "Looks like a RedHead";
  }
}


export class MallardDuck extends Duck {
  display() {
    return "Looks like a Mallard";
  } 
}


export class TealDuck extends Duck {
  display() {
    return "Looks like a Teal";
  }
}


export class RubberDuck extends Duck {
  quack() {
    console.log('squeek!')
  }

  display() {
    return "A rubber ducky!"
  }  
}