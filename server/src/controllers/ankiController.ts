import {
    Controller,
    Post,
    Route,
    Response,
    Body,
    Tags
} from "tsoa"
import AnkiExport from 'anki-apkg-export'

@Route("anki")
export class AnkiController extends Controller{
    
    @Response('200', 'Anki deck successfully generated')
    @Response('400', 'Invalid deck name')
    @Response('500', 'Internal server error')
    @Tags('Anki')
    @Post("generateDeck")
    public async generateDeck(@Body() body: {
        deckName: string,
    })
    {

        this.setStatus(200);
        return `Hello `
    }

    @Response('200', 'Card successfully added to the study deck.')
    @Tags('Anki')
    @Post('addCard')
    public addCard(@Body() body: {}) {
        this.setStatus(200)
        return 'hi mom'
    }
    
   
}