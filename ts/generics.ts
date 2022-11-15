class ValueHolder<TypeForValueProperty> {
    value: TypeForValueProperty
}

const numberHolder = new ValueHolder<number>()
numberHolder.value = 10

const stringHolder = new ValueHolder<string>()
stringHolder.value = 'A String'

const booleanHolder = new ValueHolder<boolean>()
booleanHolder.value = true