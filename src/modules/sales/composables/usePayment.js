import { computed, ref } from 'vue';
import useCart from './useCart';

const usePayment = () => {

    const regCupon = /^FREE-[1-3]{3}$/g

    const { carts } = useCart();

    const cupon = ref('');

    const couponApplied = ref('');

    const discount = ref(0);

    function calcTotalPrice(carts) {
        let total = 0;
        carts.forEach(({ item, quantity }) => {
            total += item.price * quantity;
        });
        return total;

    }

    const totalMount = computed(() => {
        return calcTotalPrice(carts.value) - (calcTotalPrice(carts.value) * discount.value / 100);
    });


    const validateCupon = () => {
        if (regCupon.test(cupon.value)) {
            discount.value = 100;
            couponApplied.value = cupon.value;
            cupon.value = '';
        }
    }


    return {
        totalMount,
        couponApplied,
        cupon,
        carts,
        validateCupon,
    }
}

export default usePayment