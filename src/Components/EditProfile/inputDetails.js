import {
    Flex,
    Box,
    FormLabel,
    Input,
    Textarea,
    Select,
} from "@chakra-ui/react";

function CustomInput({ register, id, placeholder, type = "text" }) {
    return (
        <Input
            id={id}
            w={["90%", "90%", "75%"]}
            placeholder={placeholder}
            type={type}
            variant="form"
            {...register(id)}
        />
    );
}

export default function InputForm({ register }) {
    return (
        <>
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
                        />
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
                    placeholder="Select option"
                    size="s"
                    {...register("interest")}
                >
                    <option value="ai">Artificial intelligence (AI)</option>
                    <option value="option2">Game Developer</option>
                    <option value="option3">Computer Network</option>
                    <option value="option3">Graphics Design</option>
                    <option value="option3">Information Security</option>
                    <option value="option3">Data Science</option>
                </Select>
            </Flex>
        </>
    );
}
