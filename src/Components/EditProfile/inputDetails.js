import {
    Flex,
    Box,
    FormLabel,
    Input,
    Textarea,
    Select,
} from "@chakra-ui/react";

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
