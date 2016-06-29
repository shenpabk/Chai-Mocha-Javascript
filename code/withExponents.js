function withExponents () {
    this.pow = function pow (a, b){
        return Math.pow(a,b);
    }
    this.multiplyExp = function multiplyExp (ab, cd){
        return Math.pow(ab[0],ab[1]) * Math.pow(cd[0], cd[1]);
    }
    this.divideExp = function divideExp (ab, cd){
        return Math.pow(ab[0],ab[1]) / Math.pow(cd[0], cd[1]);
    }
}

module.exports = withExponents;