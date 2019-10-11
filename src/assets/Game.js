class Game {
    constructor() {
            this.arr = [
                    [{ id: '1', value: 0 }, { id: '2', value: 0 }, { id: '3', value: 0 }, { id: '4', value: 0 }],
                    [{ id: '5', value: 0 }, { id: '6', value: 0 }, { id: '7', value: 0 }, { id: '8', value: 0 }],
                    [{ id: '9', value: 0 }, { id: '10', value: 0 }, { id: '11', value: 0 }, { id: '12', value: 0 }],
                    [{ id: '13', value: 0 }, { id: '14', value: 0 }, { id: '15', value: 0 }, { id: '16', value: 0 }],
                ],
                this.max = [2]
            this.isMove = false //是否已经移动过，若所有的都无法移动，则代表已无法移动，游戏结束
            this.historyMax = 2
            this.isGameOver = false
        }
        //新增一个点
    newItem(arr) {
        let _this = this
        let noNum = []
            // console.log('arr', arr)
        arr.forEach((items, indexs) => {
            items.forEach((item, index) => {
                if (items[index]['value'] === 0) {
                    noNum.push({
                        'out': indexs,
                        'inner': index
                    })
                }
            })
        })
        if (!noNum.length) {
            this.isGameOver = true
                // alert('游戏结束')
            this.gameOver()
            return
        }
        //取随机index
        let item = Math.floor(Math.random() * (noNum.length))
        let newNumIndex = Math.floor(Math.random() * (_this.max.length - 1))
        arr[noNum[item].out][noNum[item].inner]['value'] = _this.max[newNumIndex]
        this.checkHistoryMax()
            // this.$set(this,arr[noNum[item].out][noNum[item].inner]['value'],_this.max[newNumIndex])
        console.log('新生成的数字为:' + _this.max[newNumIndex] + '其位置在:' + noNum[item].out + ',' + noNum[item].inner)
            // console.log('新生成的图')
            // console.table(arr)
    }
    moveLeft(arr) {
        let _this = this
        if (this.isGameOver) {
            return
        }
        for (let indexs = 0; indexs < 4; indexs++) {
            for (let index = 0; index < 3; index++) {
                if (!_this.max.includes(arr[indexs][index]['value']) && arr[indexs][index]['value']) {
                    _this.max.push(arr[indexs][index]['value'])
                }
                if (index < 3) { //当前index >0，则判断其左侧是否有值，不然，则判断当前值
                    [arr[indexs][index]['value'], arr[indexs][index + 1]['value']] = _this.itemCount(arr[indexs][index]['value'], arr[indexs][index +
                        1
                    ]['value'])
                    if (_this.isMove) {
                        indexs = 0
                        index = -1
                        _this.isMove = false
                    }
                }
            }
        }
        for (let index = 3; index >= 0; index--) { //若除了所有二维数组的第一个都不能移动，则判断最左侧是否有值
            if (arr[index][0]['value'] > 0) {
                _this.isMove = true
            }
        }
        if (!_this.isMove) {
            // alert('游戏结束')
            this.gameOver()
        } else {
            _this.isMove = false
            _this.newItem(arr)
        }
    }
    moveRight(arr) {
        let _this = this
        if (this.isGameOver) {
            return
        }
        for (let indexs = 3; indexs >= 0; indexs--) {
            for (let index = 3; index > 0; index--) {
                if (!_this.max.includes(arr[indexs][index]['value']) && arr[indexs][index]['value']) {
                    _this.max.push(arr[indexs][index]['value'])
                }
                [arr[indexs][index]['value'], arr[indexs][index - 1]['value']] = _this.itemCount(arr[indexs][index]['value'], arr[indexs][index - 1]['value'])
                if (_this.isMove) {
                    indexs = 3
                    index = 4
                    _this.isMove = false
                }
            }
        }
        for (let index = 0; index < 4; index++) { //若除了所有二维数组的第一个都不能移动，则判断最左侧是否有值
            if (arr[index][3]['value'] > 0) {
                _this.isMove = true
            }
        }

        if (!_this.isMove) {
            // alert('游戏结束')
            this.gameOver()
        } else {
            _this.isMove = false
            _this.newItem(arr)
        }
    }
    moveTop(arr) {
        let _this = this
        if (this.isGameOver) {
            return
        }
        for (let indexs = 0; indexs < 3; indexs++) {
            for (let index = 0; index <= 3; index++) {
                if (!_this.max.includes(arr[indexs][index]['value']) && arr[indexs][index]['value']) {
                    _this.max.push(arr[indexs][index]['value'])
                }
                [arr[indexs][index]['value'], arr[indexs + 1][index]['value']] = _this.itemCount(arr[indexs][index]['value'], arr[indexs + 1][index]['value'])
                if (_this.isMove) {
                    indexs = 0
                    index = -1
                        // debugger
                    _this.isMove = false
                }
            }
        }
        for (let index = 0; index <= 3; index++) { //若除了所有二维数组的第一个都不能移动，则判断最左侧是否有值
            if (arr[0][index]['value'] > 0) {
                _this.isMove = true
            }
        }

        if (!_this.isMove) {
            // alert('游戏结束')
            this.gameOver()
        } else {
            _this.isMove = false
            _this.newItem(arr)
        }
    }
    moveDown(arr) {
        let _this = this
        if (this.isGameOver) {
            return
        }
        for (let indexs = 3; indexs > 0; indexs--) {
            for (let index = 3; index >= 0; index--) {
                if (!_this.max.includes(arr[indexs][index]['value']) && arr[indexs][index]['value']) {
                    _this.max.push(arr[indexs][index]['value'])
                }
                [arr[indexs][index]['value'], arr[indexs - 1][index]['value']] = _this.itemCount(arr[indexs][index]['value'], arr[indexs - 1][index]['value'])
                if (_this.isMove) {
                    indexs = 3
                    index = 4
                    _this.isMove = false
                }
            }
        }
        for (let index = 0; index < 4; index++) {
            if (arr[3][index]['value'] > 0) {
                _this.isMove = true
            }
        }

        if (!_this.isMove) {
            // alert('游戏结束')
            this.gameOver()
        } else {
            _this.isMove = false
            _this.newItem(arr)
        }
    }
    itemCount(prew, item) {
        let _this = this
        if (this.isGameOver) {
            return
        }
        if (prew > 0 && item > 0) {
            if (prew == item) { //当前值与左侧均有值，并且相等，则赋予左侧两数相加之和，当前值赋0
                _this.isMove = true
                return [prew, item] = [prew + item, 0]
            } else {
                return [prew, item]
            }
        } else if (item > 0) { //当前值大于零，左侧为0 
            _this.isMove = true
            return [item, 0]
        } else { //进入此判断只有两种可能1、前数有值后数为0  2、均为0 原样return即可
            return [prew, item]
        }
    }
    gameOver() {
        window.vm.$confirm('游戏结束,是否重新开始', '警告⚠️', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
        }).then(() => {
            // console.log('vm', window.vm)
            window.vm.reStart()
            return
        }).catch(() => {
            window.vm.$message({
                type: 'info',
                message: '已点击取消'
            });
        })
    }
    checkHistoryMax() { //检查历史最大值
        let historyMax = this.getCookie('max')
        if (this.max[this.max.length - 1] > historyMax) {
            this.setCookie('max', this.max[this.max.length - 1])
        } else {
            this.historyMax = historyMax
        }
    }
    getCookie(name) {
        let arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
        if (arr = document.cookie.match(reg)) {
            return unescape(arr[2]);
        } else {
            return null;
        }
    }
    setCookie(name, value) {
        let Days = 30;
        let exp = new Date();
        exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
        document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
    }
    delCookie(name) {
        let exp = new Date();
        exp.setTime(exp.getTime() - 1);
        let cval = getCookie(name);
        if (cval != null) {
            document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
        }
    }
}
export default Game