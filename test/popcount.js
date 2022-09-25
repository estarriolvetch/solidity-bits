const { expect, assert } = require("chai");
const { BigNumber } = require("ethers");
const { ethers } = require("hardhat");

const UINT256MAX = BigNumber.from("115792089237316195423570985008687907853269984665640564039457584007913129639935");


describe("Popcount", function () {
  let popcount;
  const ONE = BigNumber.from("1");
  before(async function(){
    const Popcount = await ethers.getContractFactory("PopcountMock");
    popcount = await Popcount.deploy();
    await popcount.deployed();
  });

  it("zero bits", async function () {
    assert.equal(
      await popcount.popcount256A(0),
      0
    );

    assert.equal(
      await popcount.popcount256B(0),
      0
    );
  });  

  it("single bit", async function () {
    const cases = [0,1,9,17,65,127,155,255];
    for (let i = 0; i < cases.length; i++) {
      const x = ONE.shl(cases[i]).toString();
      assert.equal(
        await popcount.popcount256A(x),
        1
      );

      assert.equal(
        await popcount.popcount256B(x),
        1
      );
    }
  });

  it("full bits", async function () {
    let x = UINT256MAX;
    assert.equal(
      await popcount.popcount256A(x),
      256
    );

    assert.equal(
      await popcount.popcount256B(x),
      256
    );
  });

  it("missing one bit", async function () {
    const cases = [0,1,9,17,65,127,155,255];
    for (let i = 0; i < cases.length; i++) {

      const x = ONE.shl(cases[i]).toString();
      assert.equal(
        await popcount.popcount256A(UINT256MAX.sub(x)),
        255
      );

      assert.equal(
        await popcount.popcount256B(UINT256MAX.sub(x)),
        255
      );
    }
  });

  it("random number", async function () {
    
    for (let i = 0; i < 10; i++) {

      const x = ethers.BigNumber.from(ethers.utils.randomBytes(32))
      
      console.log("random number: ", x.toString());
      assert.equal(
        (await popcount.popcount256A(x)).toString(),
        (await popcount.popcount256B(x)).toString()
      );
      //console.log((await popcount.popcount256A(x)).toString());
    }
  });
});
