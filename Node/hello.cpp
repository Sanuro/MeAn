#include <iostream>
#include <deque>

template <typename T>

StackNode * minimum (StackNode *head) {
    if (top == nullptr) return nullptr;
    StackNode *current = head;
    StakNode *min = top;
    while (current) {
        if (current->data < min->data) {
            min = current;
        }
        current-= current ->next;
    }
    return min;
}

T datum (StackNode *min) {
    return min->data;
}