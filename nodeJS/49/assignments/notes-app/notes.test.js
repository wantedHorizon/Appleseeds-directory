
const notes = require('./notes');
const fs = require('fs');
const { listNotes } = require('./notes');
global.console = {
    log: jest.fn(),
    info: jest.fn(),
    error: jest.fn()
  }
describe('notes', () => {

    describe('addNote', () => {
        it('should add note to the list', () => {
            notes.addNote('testTitle', 'testBody');

            const result = fs.readFileSync('./notes.json').toString();
            const notesArr = JSON.parse(result);
            const res =notesArr.filter(n=> n.title==='testTitle');

            console.log(result); 
            expect(res[0]).toEqual({
                title: 'testTitle',
                body: 'testBody'
            });

            expect(res.length).toEqual(1);
        });
    });


    describe('removeNote', () => {
        it('should remove note to the list', () => {
            notes.addNote('testTitle1', 'testBody');
            notes.removeNote('testTitle1', 'testBody');

            const result = fs.readFileSync('./notes.json').toString();
            const notesArr = JSON.parse(result);
            const res =notesArr.filter(n=> n.title==='testTitle1');

             
            expect(res[0]).toEqual(undefined);

            expect(res.length).toEqual(0);
        });
    });


    describe('removeNote', () => {
        it('should remove note to the list', () => {
            const res =notes.listNotes();

            const result = fs.readFileSync('./notes.json').toString();
            const notesArr = JSON.parse(result);
            expect(res).toEqual(notesArr)
        });
    });

    describe('readNote', () => {
       

        it('should remove note to the list', () => {
        
        
            const res= notes.readNote('t');

            expect(global.console.log).toHaveBeenCalledWith(
                't'
                
              )
        });
    });
});