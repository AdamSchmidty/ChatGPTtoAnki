import {
    Body,
    Controller,
    Get,
    Path,
    Post,
    Query,
    Route,
    SuccessResponse,
    Response
} from "tsoa"

@Route("anki")
export class AnkiController extends Controller{
    
    @Response('200', 'Successfully BARed the foo')
    @Get("foo")
    public async getFoo(
    ){
        this.setStatus(200);
        return `Hello `
    }
}