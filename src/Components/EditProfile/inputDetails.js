import {
    Flex,
    Box,
    FormLabel,
    Input,
    Textarea,
    Select,
    useToast,
    Button
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { axiosPostRequest } from "../../apiHelper";
import { useSelector } from "react-redux";
import { useRef } from "react";

const validFileTypes = ['image/jpg', 'image/jpeg', 'image/png']

function CustomInput({ register, id, placeholder, val, type = "text" }) {
    return (
        <Input
            id={id} required
            w={["90%", "90%", "75%"]}
            placeholder={placeholder}
            type={type}
            variant="form"
            defaultValue={val}
            {...register(id)}
        />
    );
}

export default function InputForm({ register, data }) {
    const navigate = useNavigate();
    const userData = useSelector((state) => state.user)
    const {_id } = userData.userData
    const toast = useToast();
    
    const hiddenFileInput = useRef(null);
    const handleClick = event => {
        hiddenFileInput.current.click();
    };
    const handleImageUpload = async (event) => {
        event.preventDefault();
        let formData = new FormData();
        let file = event.target.files[0];
        formData.append('file', file);
        formData.append('userID', _id)
        try{
            const imageData = await axiosPostRequest('/uploadfile', formData, {'Content-Type': 'multipart/form-data'})
            if(imageData.response.status === 401){
                navigate('/signout')
                return toast({
                    title : "Session Timeout",
                    description: "Session expired please login again",
                    variant: "top-accent",
                    status: "info",
                    duration: 5000,
                    position: "top",
                    isClosable: true,
                })
            }
        }
        catch(error){
            console.log(error.response);
        }
    }

    return (
        <>  
            <Button onClick={handleClick} >Edit Image</Button>
            <Input type={"file"} ref={hiddenFileInput} onChange={handleImageUpload} display={"none"}/>
            <Flex
                justify="space-between"
                direction={["column", "column", "row"]}
            >
                <FormLabel variant="profile" color="secondary">
                    Headline
                </FormLabel>
                <CustomInput
                    id="headline"
                    placeholder="your headline"
                    register={register}
                    val={data.headline}
                />
            </Flex>
            <Flex
                justify="space-between"
                direction={["column", "column", "row"]}
            >
                <FormLabel variant="profile" color="secondary">
                    Your Bio
                </FormLabel>
                <Textarea
                    id="bio"
                    w={["90%", "90%", "75%"]}
                    placeholder="Graduate from stanford university"
                    type="text"
                    mb="2vh"
                    variant="form"
                    defaultValue={data.bio}
                    {...register("bio")}
                />
            </Flex>
            <Flex
                justify="space-between"
                direction={["column", "column", "row"]}
            >
                <FormLabel variant="profile" color="secondary">
                    Work Experience
                </FormLabel>
                <Box w={["100%", "100%", "75%"]}>
                    <Flex
                        justify="space-between"
                        direction={["column", "column", "row"]}
                    >
                        <FormLabel variant="profile">Organization</FormLabel>
                        <CustomInput
                            id="organization"
                            placeholder="Organization name"
                            register={register}
                            val={data.organization}
                        />
                    </Flex>
                    <Flex
                        justify="space-between"
                        direction={["column", "column", "row"]}
                    >
                        <FormLabel variant="profile">Role</FormLabel>
                        <CustomInput
                            id="role"
                            placeholder="Your Role"
                            register={register}
                            val={data.role}
                        />
                    </Flex>
                    <Flex
                        justify="space-between"
                        direction={["column", "column", "row"]}
                    >
                        <FormLabel variant="profile">Work Summary</FormLabel>
                        <Textarea
                            id="summary"
                            w={["90%", "90%", "75%"]}
                            placeholder="What do you do?"
                            type="text"
                            mb="2vh"
                            variant="form"
                            {...register("workSummary")}
                            defaultValue={data.workSummary}/>
                    </Flex>
                </Box>
            </Flex>
            <Flex
                justify="space-between"
                direction={["column", "column", "row"]}
            >
                <FormLabel variant="profile" color="secondary">
                    Education
                </FormLabel>
                <Box w={["100%", "100%", "75%"]}>
                    <Flex
                        justify="space-between"
                        direction={["column", "column", "row"]}
                    >
                        <FormLabel variant="profile">Institution</FormLabel>
                        <CustomInput
                            id="institution"
                            placeholder="Institution name"
                            register={register}
                            val={data.institution}
                        />
                    </Flex>
                    <Flex
                        justify="space-between"
                        direction={["column", "column", "row"]}
                    >
                        <FormLabel variant="profile">Course</FormLabel>
                        <CustomInput
                            id="course"
                            placeholder="Course name"
                            register={register}
                            val={data.course}
                        />
                    </Flex>
                </Box>
            </Flex>
            <Flex
                w={["90%", "90%", "75%"]}
                justify="space-between"
                align="baseline"
                mb="6px"
                direction={["column", "column", "row"]}
            >
                <FormLabel minWidth="30%" variant="profile" color="secondary">
                    Area of Interest
                </FormLabel>
                <Select
                    required
                    placeholder="Select option"
                    size="s"
                    {...register("interest")}
                    defaultValue={data.interest ? data.interest[0] : undefined}
                >
                    <option value="Artificial Intelligence">Artificial intelligence (AI)</option>
                    <option value="Game Developer">Game Developer</option>
                    <option value="Computer Network">Computer Network</option>
                    <option value="Graphics Design">Graphics Design</option>
                    <option value="Information Security">Information Security</option>
                    <option value="Data Science">Data Science</option>
                </Select>
            </Flex>
        </>
    );
}
