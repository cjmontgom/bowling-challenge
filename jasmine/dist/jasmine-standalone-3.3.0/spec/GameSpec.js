// describe ('BowlingScores', function() {
//
//   var scoreSheet;
//
//   beforeEach (function() {
//     scoreSheet = new BowlingScores();
//   });
//
//   it ('has ten frames', function() {
//     expect(scoreSheet.frames.length).toBe(10);
//   });
//
//   it ('has a scoring status that starts off not pending', function() {
//     expect(scoreSheet.pending).toBe(false);
//   });
//
//   it ('frames 1 to 9 has two rolls each', function() {
//     expect(scoreSheet.frames[0]).toEqual({a: 0, b: 0});
//   });
//
//
//   describe ('_calculate', function() {
//
//     it ('can calculate a frame without a strike or spare', function() {
//       scoreSheet.frames[0]['a'] = 4;
//       scoreSheet.frames[0]['b'] = 4;
//       expect(scoreSheet._calculate(scoreSheet.frames[0])).toEqual(8)
//     });
//
//     it ('has a pending score status if player scores a spare', function() {
//       scoreSheet.frames[0]['a'] = 4;
//       scoreSheet.frames[0]['b'] = 6;
//       scoreSheet._calculate(scoreSheet.frames[0]);
//       expect(scoreSheet.pending).toBe(true)
//     });
//
//   });
//
//
//   describe ('_switchPendingStatus', function() {
//
//     it ('switches the status to pending when not currently pending', function() {
//       scoreSheet.pending = false;
//       scoreSheet._switchPendingStatus();
//       expect(scoreSheet.pending).toBe(true)
//     });
//
//   });
//
// });
//
//
//
//
// // describe ("Thermostat", function() {
// //     var thermostat;
// //     beforeEach(function() {
// //         thermostat = new Thermostat()
// //     });
// //
// //     it('has property temperature default', function() {
// //         expect(thermostat.temperature).toBe(thermostat.DEFAULT_TEMP)
// //     })
// //
// //     it('has a minimum temperature of 10 degrees', function() {
// //         expect(thermostat.MINIMUM_TEMP).toBe(10)
// //     })
// //
// //     it('has a default power saving mode setting-- ON', function() {
// //         expect(thermostat.powerSaver)
// //     })
// //
// //     it('has property maxtemp which is 25 when powersaving and 32 when not', function() {
// //         expect(thermostat.maxtemp).toBe(25)
// //         thermostat._powerSaveOff()
// //         expect(thermostat.maxtemp).toBe(32)
// //     })
// //
// //     describe ("_up", function() {
// //         it('increments temperature by one', function() {
// //             thermostat._up()
// //             expect(thermostat.temperature).toBe(21)
// //         })
// //         it('has a maximum temp of 25 degrees when power saver is on', function() {
// //             for (let counter = 0; counter < 5; counter++){
// //                 thermostat._up()
// //             };
// //             expect(function(){thermostat._up();}).toThrowError('cannot increase above 25 degrees when power saver is on')
// //         })
// //     })
// //
// //     describe ('_down', function() {
// //         it('decrements temperature by one', function() {
// //             thermostat._down()
// //             expect(thermostat.temperature).toBe(19)
// //         })
// //
// //         it('cannot be reduced below the mimimum temperature', function() {
// //             for (let counter = 0; counter < 10; counter++){
// //                 thermostat._down()
// //             };
// //             expect(function(){thermostat._down();}).toThrowError('cannot reduce below 10 degrees')
// //         })
// //     })
// //
// //     describe ('_powerSaveOff', function() {
// //         it("sets powerSaver to 'false'", function() {
// //             thermostat._powerSaveOff()
// //             expect(thermostat.powerSaver).toBe('OFF')
// //         })
// //     })
// //
// //     describe ('_powerSaveOn', function() {
// //         it("sets powerSaver to 'true'", function() {
// //             thermostat._powerSaveOff()
// //             thermostat._powerSaveOn()
// //             expect(thermostat.powerSaver).toBe('ON')
// //         })
// //     })
// //
// //     describe ('_reset', function() {
// //         it("resets the temperature to default temperature", function() {
// //             thermostat._down()
// //             thermostat._reset()
// //             expect(thermostat.temperature).toBe(thermostat.DEFAULT_TEMP)
// //         })
// //     })
// //
// //     describe ('_usage', function() {
// //         it("evaluates usage as LOW when temp is below 18", function() {
// //             thermostat.temperature = 17
// //             expect(thermostat._usage()).toBe('Low Energy Usage')
// //         })
// //         it("evaluates usage as MEDIUM when temp is above 18 and below 25", function() {
// //             thermostat.temperature = 24
// //             expect(thermostat._usage()).toBe('Medium Energy Usage')
// //         })
// //         it("evaluates usage as HIGH when temp is above 25", function() {
// //             thermostat.temperature = 26
// //             expect(thermostat._usage()).toBe('High Energy Usage')
// //         })
// //     })
// //
// // })
