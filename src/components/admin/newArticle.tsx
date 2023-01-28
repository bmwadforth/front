import {Box} from "@mui/system";
import {Alert, AlertColor, Button, Snackbar, TextField} from "@mui/material";
import {useState} from "react";
import {useRecoilState} from "recoil";
import {newArticleState} from "../../store/articles/articlesState";
import ArticleApiService from "../../util/articleApiService";

export default function NewArticle() {
    const [article, setArticle] = useRecoilState(newArticleState);
    const [form, setForm] = useState({title: '', description: ''});
    const [showAlert, setShowAlert] = useState({status: '', message: ''});
    const onChange = (name: string, val: string) => setForm({...form, [name]: val});

    const onFileUpload = async (name: string, val: File, type: string) => {
        const apiService = new ArticleApiService();
        switch (name) {
            case 'content': {
                try {
                    await apiService.uploadArticleContent(article.id.toString(), val, type);
                    setShowAlert({status: 'success', message: 'Successfully uploaded file'});
                } catch (e) {
                    setShowAlert({status: 'error', message: 'Failed to upload file'});
                }

                break;
            }
            case 'thumbnail': {
                try {
                    await apiService.uploadArticleThumbnail(article.id.toString(), val, type);
                    setShowAlert({status: 'success', message: 'Successfully uploaded file'});
                } catch (e) {
                    setShowAlert({status: 'error', message: 'Failed to upload file'});
                }

                break;
            }
            default:
                break;
        }
    }
    const handleClose = () => setShowAlert({status: '', message: ''});
    const onSubmit = async (e: any) => {
        e.preventDefault();
        try {
            const apiService = new ArticleApiService();
            const res = await apiService.createArticle(form.title, form.description);
            setArticle({id: res.payload as number, title: form.title, description: form.description});
            setShowAlert({status: 'success', message: 'Successfully created article'});
        } catch (e) {
            setShowAlert({status: 'error', message: 'Failed to create article'});
            setArticle({id: 0, title: "", description: ""});
        }
    }

    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': {width: '100%', my: 2},
            }}
            noValidate
            autoComplete="off"
        >
            {showAlert.status &&
                <Snackbar open={!!showAlert.status || false} autoHideDuration={6000} onClose={handleClose}>
                    <Alert variant="filled" severity={showAlert.status as AlertColor}>
                        {showAlert.message}
                    </Alert>
                </Snackbar>}

            <>
                <TextField id="title" name='title' label="Title" variant="filled" type="text"
                           onChange={(e: any) => onChange('title', e.target.value)}/>
                <TextField id="description" name='description' label="Description" variant="filled" type="text"
                           onChange={(e: any) => onChange('description', e.target.value)}/>

                {article.id === 0 ?
                    <Button sx={{width: '100%', mt: 2}} variant="contained" type='submit' onClick={onSubmit}>
                        Create Article
                    </Button>
                    :
                    <>
                        <Button
                            variant="contained"
                            component="label"
                            sx={{mr: 2}}
                            disabled={!(form.title && form.description)}
                        >
                            Upload Article
                            <input
                                type="file"
                                onChange={(e: any) => onFileUpload('content', e.target.files[0], e.target.files[0].type)}
                                hidden
                            />
                        </Button>
                        <Button
                            variant="contained"
                            component="label"
                            disabled={!(form.title && form.description)}
                        >
                            Upload Thumbnail
                            <input
                                type="file"
                                onChange={(e: any) => onFileUpload('thumbnail', e.target.files[0], e.target.files[0].type)}
                                hidden
                            />
                        </Button>
                    </>}
            </>
        </Box>
    )
}