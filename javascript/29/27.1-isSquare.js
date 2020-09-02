function Square(a, b, c, d){
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
   }


   Square.prototype.isSquare = function()  {
    if(this.a === this.b && this.a === this.c && this.a === this.d) return true;
    
    return false;
   }

   const sq1 = new Square(1,1,1,1);
   const sq2 = new Square(1,2,1,1);
   console.log(sq1.isSquare());//true
   console.log(sq2.isSquare());//false
