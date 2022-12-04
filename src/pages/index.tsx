import { Button, Flex, Stack } from '@chakra-ui/react'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Input } from '../components/Form/Input'

type SignInFormData = {
  email?: string
  password?: string
}

const sigInFormSchema = yup.object().shape({
  email: yup.string().required('Email obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha obrigatória'),
})

export default function SignIn() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(sigInFormSchema),
  })

  const { errors } = formState

  const handleSignIn: SubmitHandler<SignInFormData> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 500))
    console.log(data)
  }
  return (
    <Flex w='100vw' h='100vh' align='center' justify='center'>
      <Flex
        as='form'
        w='100%'
        maxW={360}
        bg='gray.800'
        p={8}
        borderRadius={8}
        flexDir='column'
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing={2}>
          <Input
            type='email'
            label='E-mail'
            error={errors.email}
            {...register('email')}
          />
          <Input
            type='password'
            label='Senha'
            error={errors.password}
            {...register('password')}
          />
        </Stack>
        <Button
          type='submit'
          mt='8'
          colorScheme='pink'
          isLoading={formState.isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
